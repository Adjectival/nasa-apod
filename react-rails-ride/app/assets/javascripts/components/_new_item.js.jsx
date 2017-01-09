var NewItem = React.createClass({
    
    handleClick() {
        var name = this.refs.name.value;
        var desc = this.refs.desc.value; 
        $.ajax({
            url: '/api/v05/items',
            type: 'POST',
            data: { item: {name: name, desc: desc} },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
        <div>
            <h2>New Item component</h2>
            <input ref='name' placeholder='Name this item' />
            <input ref='desc' placeholder='Describe this item' />
            <button onClick={this.handleClick}>POST new Item</button>
        </div>
        )
    }
});