// 
// (L-38)
// We create components in .jsx file
// React components are just javascript functions you can say.
//
///////////////////
// (L-37)
// Component functions must follow two rules
//
// 1. Name Starts With Uppercase character
//    The func must start with an upper case character
//
// 2. Returns “Renderable” Content
//    The func must return the value that can be rendered(“display on screen”) by React.
//    In most cases: Return JSX also allowed: string, number, boolean, null, array of allowed values.
////////////////
//
// When a function in component returns a multiline code then we have to put it in () to tell javascript that all this code belongs together.
// SYNTAX:
 function Header() {
  return (        <------ here you can see
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );             <------- here you can see
}
/////////////////
//
//
