import React from "react";

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            term: ""
        }
        componentDidMount() {
            console.log("did mount");
            const fetchData = async() => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${entity}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                const jsonData = await response.json();
                this.setState({...this.state, data: jsonData});
            }
            fetchData();
        }
        render() {
            console.log("render");
            let {term, data} = this.state;
            let filteredData = data.filter(d => {
                if(entity === "users") {
                    const {name} = d;
                    return name.indexOf(term) >= 0;
                }
                if(entity === "todos") {
                    const {title} = d;
                    return title.indexOf(term) >= 0;
                }
            });

            return(
                <div>
                <div>
                    <h2>{entity}</h2>
                    <input type="text" value={term} onChange={(e) => this.setState({...this.state, term: e.target.value})}/>
                </div>
                <WrappedComponent data={filteredData} />
                </div>
            );
        }
    };
};

export default HOC;