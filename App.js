const heading = 
React.createElement(
    "div",{id:'parent'}, 
    [
    React.createElement(
        "div",{id:'child1'},
        [
        React.createElement(
            "h1",
            {id:'h1id',className:'h1class'}
            ,"Hello World parent child Tag!")
            
         ,   React.createElement(
            "h2",
            {id:'h1id',className:'h1class'}
            ,"Hello World parent child Tag!")]
            ),
            React.createElement(
                "div",{id:'child2'},
                [
                React.createElement(
                    "h1",
                    {id:'h1id',className:'h1class'}
                    ,"Hello World parent child Tag!")
                    
                 ,   React.createElement(
                    "h2",
                    {id:'h1id',className:'h1class'}
                    ,"Hello World parent child Tag!")]
                    )
                 ]
)

const parent = React.createElement(
    "div",{id:'parent'}, React.createElement(
        "div",{id:'child'},
        
        React.createElement(
            "h1",
            {id:'h1id',className:'h1class'}
            ,"Hello World parent child Tag!"))
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
root.render(heading);