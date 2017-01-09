var Main = React.createClass({
    render() {
        var backgroundStyle = {
            padding: "2vw",
            backgroundColor: "#4a4a4a",
            color: "firebrick",
        };
       
        return (
        <div style={backgroundStyle}>
            <Header />
            <Body />
        </div>
        );
   } 
});