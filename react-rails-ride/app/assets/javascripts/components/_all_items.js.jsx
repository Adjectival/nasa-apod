var AllItems = React.createClass({
    
    render() {
        var items = this.props.items.map((item) => {
            return (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <textarea>{item.desc}</textarea>
            </div>
            )
        });
        
        
        return (
        <div>
            <h1>All Items component</h1>
            {items}
        </div>
        )
    }
});