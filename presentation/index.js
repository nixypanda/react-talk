// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// Importing all of the code snippets
const CODE_SNIPPETS = {
  HELLO_WORLD: require("../assets/helloworld"),
  HELLO_NAME: require("../assets/helloname"),
  HELLO_NAME_JSX: require("../assets/hellonamejsx"),
  STATEFUL_RC: require("../assets/stateful")
};

// Images
const images = {
  frameworks: require("../assets/0days.jpg"),
  react: require("../assets/react.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#0E2738",
  secondary: "beige"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary" >
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Introduction to React
            </Heading>
          </Slide>

         

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit textColor="secondary">About the speaker</Heading>
            <Layout>
              <List textColor="white">
                <ListItem>Sherub Thakur</ListItem>
                <ListItem>Sapient Global Markets</ListItem>
                <ListItem>Gurgaon GGN</ListItem>
                <ListItem>@Sherub_7</ListItem>
                <ListItem>http://github.com/jck-d-rpr</ListItem>
              </List>
			  <List textColor="white">
                <ListItem>Charu Agarwal</ListItem>
                <ListItem>Sapient Global Markets</ListItem>
                <ListItem>Gurgaon GGN</ListItem>
                <ListItem>http://github.com/itscharu</ListItem>
              </List>
            </Layout>
          </Slide>
		  
		  <Slide transition={["slide"]} bgColor="primary" notes="ReactJS - A declarative, efficient, and flexible JavaScript library for building user interfaces">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              A Javascript library for building user interfaces
            </Heading>
          </Slide>
		  
		  <Slide transition={["zoom"]} bgColor="primary" notes="There hasn't been a day without a new javascript library being introduced.">
            <Image src={images.frameworks.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>		  

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
			notes={`What is so special about ReactJS.
			Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes.
			When the data changes, React conceptually hits the 'refresh' button, and knows to
            only update the changed parts.
			React is all about building reusable components. In fact, with React the only thing
            you do is build components. Since they are so encapsulated, components make code reusability, testing, and
            separation of concerns easy.
			React challenges a lot of conventional wisdom, and at first glance some of the ideas
            may seem crazy. Give it five minutes; those crazy ideas have worked for building thousands of
            components both inside and outside of Facebook and Instagram.`}
			>
            <Heading caps fit textColor="tertiary">Why React?</Heading>
            <List>
              <Appear>
                <ListItem >
                  Simple
              </ListItem>
              </Appear>
              <Appear>
                <ListItem 
                >
                  Declarative
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Composable Components
                </ListItem>
              </Appear>              
            </List>
          </Slide>

          <CodeSlide transition={[]} lang="js" code={CODE_SNIPPETS.HELLO_WORLD} notes="Lets look at our favourite Hello World component in ReactJS. render() is the heart of any react component as it takes care of rendering the component on the UI. You can render a component using either only javascript or HTML and javascript(JSX)" ranges={[
            { loc: [ 0, 17], title: "Let\'s dive right in" },
            { loc: [ 0, 17], title: "Hello World!! Perhaps.." },
            { loc: [ 2, 3], note: "creating a react component" },
            { loc: [ 3, 10], note: "The render method" },
            { loc: [4, 9], note: "Returning a react element" },
            { loc: [4, 9], title: "Umm..Let's analyse that" },
            { loc: [5, 6], note: "The type of the component" },
            { loc: [6, 7], note: "Something null (will come to it later)" },
            { loc: [7, 8], note: "And the ever popular Hello World!!" },
            { loc: [12, 16], note: "Now we politly ask the DOM to render our component on a mountNode" },
            { loc: [13, 14], note: "Creating an element with our variable and again a null" },
            { loc: [ 0, 17], title: "That's all folks!" }
          ]}
          />
		  
		  <Slide transition={["spin"]} bgColor="primary" notes="This will be the output" >
		    <Heading size={1} fit textColor="white" textFont="primary">
              Hello World
            </Heading>            
          </Slide>		

          <CodeSlide transition={[]} lang="js" code={CODE_SNIPPETS.HELLO_NAME} notes="Using properties" ranges={[
            { loc: [ 0, 17], title: "Another example" },
            { loc: [7, 8], note: "And the ever popular Hello " },
            { loc: [8, 9], note: "Looks like some sort of a property object with a name field" },
            { loc: [13, 17], note: "Now we politly ask the DOM to render our component on a mountNode" },
            { loc: [14, 15], note: "now the null is an object (the key seems familiar?)" },
            { loc: [ 0, 17], title: "That's all folks!" }
          ]}
          />

          <CodeSlide transition={[]} lang="js" code={CODE_SNIPPETS.HELLO_NAME_JSX} ranges={[
            { loc: [ 0, 11], title: "Yet another example" },
            { loc: [ 2, 3], note: "The return here seems different. Right?" },
            { loc: [ 2, 3], title: "This is JSX" },
            { loc: [ 7, 8], note: "Again JSX to the rescue" },
            { loc: [ 0, 10], title: "That's all folks!" }
          ]}
          />

          <CodeSlide transition={[]} lang="js" code={CODE_SNIPPETS.STATEFUL_RC} ranges={[
            { loc: [ 0, 21], title: "One more Example?" },
            { loc: [ 0, 21], title: "A react component with 2 lifecycle hooks and state" },
            { loc: [ 0, 21], title: "That's all folks!" }
          ]}
          />

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Concepts and Theory
            </Heading>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <BlockQuote>
              <Quote textSize={40} >
                Our intellectual powers are rather geared to master static relations and that our powers to visualize
                processes evolving in time are relatively poorly developed. For that reason we should do our utmost to
                shorten the conceptual gap between the static program and the dynamic process, to make the
                correspondence between the program and the processas trivial as possible.
              </Quote>
              <Cite textColor="primary">Edsger W Dijkstra</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes=" React abstracts away the DOM from you, giving a simpler programming model and better performance. React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.">
            <Heading caps fit textColor="secondary">Concepts</Heading>
            <Layout>
              <List textColor="white">
			   <Appear>
                <ListItem>Properties</ListItem></Appear>
				<Appear>
                <ListItem>State</ListItem></Appear>
				<Appear>
                <ListItem>Lifecycle</ListItem></Appear>
				<Appear>
                <ListItem>Virtual DOM</ListItem></Appear>
                <Appear>
                <ListItem>Data flow</ListItem></Appear>
              </List>
            </Layout>
          </Slide>
		  
		  <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              Properties
            </Heading>
          </Slide>
		  
		  <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              State
            </Heading>
          </Slide>
		  
		  <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              Life cycle
            </Heading>
          </Slide>
		  
		  <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary" >
              Virtual DOM
            </Heading>
          </Slide>

          

        </Deck>
      </Spectacle>
    );
  }
}
