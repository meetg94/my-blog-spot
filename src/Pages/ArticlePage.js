export default function ArticlePage() {
    return (
    <div>
        <h2>Article 1: Import React Definitions</h2>
        <p>
        Definitions:
            If you are not a React expert, It is strongly recommended to read the definitions section. You can start from the example
            section and then return to this section later if something is not clear.

            the more important definitions here are: render, update, react hook and phase.

            browser DOM - a tree of HTML elements. These elements make up everything the user sees in the browser, including this very page.
            React - A library for manipulating React components.
            React component - function(or class) that holds stateful logic managed by React lib, that component usually returns UI elements based on the stateful logic of the same component. React have class components, and functional components(FC).
            React tree - a tree of React components(like the tree you can see in React devtools). this is not the same as the browser's DOM tree.
            react renderer - ReactDOM in web(or react-native in mobile) - a library that knows how to manipulate React tree and 'render' it into the browser's DOM in the desired location(in react apps usually to root element). The renderer managing a Virtual DOM (VDOM) which is created and updated based on the given React tree.
            render - this is the moment when React tree is created based on the current state. then the tree is passed to the renderer that will update the VDOM, and then will flush the changes into the browser's DOM.
            update - when we say that a component 'updates', we are saying that the function component body re-executed (with possibly different props). it is possible that more the one update cycle will occur before a render. examples of the difference between update and render later.
            react hook - A primitive that shares stateful logic with the parent Component. this is the reason hooks allowed only inside a body of a function component - hook is hooked to the parent component stateful logic. The hook and the parent component updates are triggers in the same phase, and the effects of the hook and the FC also fire in the same phase.
            a component's phase - this is not an official term, I'm using this term in this tutorial to describe a different point of time in a React component. update: also React calls this phase.
            Note - These definitions were summarized by me and may not be accurate, but they are sufficient to understand the rest of
            the article.


        </p>
    </div>
    )
}