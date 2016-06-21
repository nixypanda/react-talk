// Import React
import React from "react";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout, ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Timer from "./Timer";
import GitHubCards from "./GitHubCards";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./GitHubCards.css");

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
  markdown: require("../assets/markdown.png"),
  lifecycle: require("../assets/react_lifecycle.jpg"),
  vdom: {
    result: require("../assets/dom.jpg"),
    change: require("../assets/vdom.jpg")
  }
};

preloader(images);

const theme = createTheme({
  primary: "#0E2738",
  secondary: "beige"
});

const llis = {
  textSize: 18,
  textColor: "primary"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary" notes="C" >
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Introduction to React
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="CS">
            <Heading caps fit textColor="secondary">About the speakers</Heading>
          <div key={1} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              <section className="github--profile" style={{ "flex": 1 }}>
                <div className="github--profile__info">
                  <img src={"https://avatars.githubusercontent.com/u/10345612?v=3"} />
                  <h2>{"Sherub Thakur"}</h2>
                  <h3>{"@jckdrpr"}</h3>
                </div>
              </section>
              <section className="github--profile" style={{ "flex": 1 }} >
                <div className="github--profile__info">
                  <img src={"https://avatars.githubusercontent.com/u/275400?v=3"} />
                  <h2>{"Charu Agarwal"}</h2>
                  <h3>{"@itscharu"}</h3>
                </div>
                </section>
            </div>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="primary"
            notes="C: ReactJS - A declarative, efficient, and flexible JavaScript library for building user interfaces"
          >
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              A Javascript library for building user interfaces
            </Heading>
          </Slide>

          <Slide
            transition={["zoom"]}
            bgColor="primary"
            bgImage={images.city.replace("/", "")}
            notes="C: There hasn't been a day without a new javascript library being introduced."
          >
            <Image src={images.frameworks.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary"
            textColor="tertiary"
            notes={`
              C
              What is so special about ReactJS.
              Simply express how your app should look at any given point in time, and React will automatically manage
              all UI updates when your underlying data changes.

              When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.

              React is all about building reusable components. In fact, with React the only thing you do is build
              components. Since they are so encapsulated, components make code reusability, testing, and separation
              of concerns easy.

              React challenges a lot of conventional wisdom, and at first glance some of the ideas
              may seem crazy. Give it five minutes; those crazy ideas have worked for building thousands of
              components both inside and outside of Facebook and Instagram.
            `}
          >
              <Heading caps fit textColor="tertiary">Why React?</Heading>
              <List>
                <Appear><ListItem>Simple</ListItem></Appear>
                <Appear><ListItem>Declarative</ListItem></Appear>
                <Appear><ListItem>Composable Components</ListItem></Appear>
              </List>
            </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={CODE_SNIPPETS.HELLO_WORLD}
            notes={`
              S
              Lets look at our favourite Hello World component in ReactJS. render() is the heart of any react
              component as it takes care of rendering the component on the UI. You can render a component using
              either only javascript or HTML and javascript(JSX)
            `}
            ranges={[
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

          <Slide
            transition={["spin"]}
            bgColor="primary"
            notes="S:Unsurprisingly This will be the output"
          >
            <Heading size={1} fit textColor="white" textFont="primary">
              Hello World!!
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={CODE_SNIPPETS.HELLO_NAME}
            notes="S:Using properties"
            ranges={[
              { loc: [ 0, 17], title: "Another example" },
              { loc: [7, 8], note: "And the ever popular Hello " },
              { loc: [8, 9], note: "Looks like some sort of a property object with a name field" },
              { loc: [13, 17], note: "Now we politly ask the DOM to render our component on a mountNode" },
              { loc: [14, 15], note: "now the null is an object (the key seems familiar?)" },
              { loc: [ 0, 17], title: "That's all folks!" }
            ]}
          />

          <Slide
            transition={["spin"]}
            bgColor="primary"
            notes="S: This will be the output"
          >
            <Heading size={1} fit textColor="white" textFont="primary">
              Hello Tech Social
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={CODE_SNIPPETS.HELLO_NAME_JSX}
            notes="S"
            ranges={[
              { loc: [ 0, 11], title: "Yet another example" },
              { loc: [ 2, 3], note: "The return here seems different. Right?" },
              { loc: [ 2, 3], title: "This is JSX" },
              { loc: [ 7, 8], note: "Again JSX to the rescue" },
              { loc: [ 0, 10], title: "That's all folks!" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="js"
            code={CODE_SNIPPETS.STATEFUL_RC}
            notes="C"
            ranges={[
              { loc: [ 0, 32], title: "One more Example?" },
              { loc: [ 0, 32], title: "A Stateful Component" },
              { loc: [ 0, 1], note: "Creating the component" },
              { loc: [ 1, 6], note: "initial value of the state." },
              { loc: [ 3, 4], note: "initial count to 0" },
              { loc: [ 6, 11], note: "Function that increments the state by 1 whenever called" },
              { loc: [ 7, 8], note: "Performs a shallow merge of nextState into current state" },
              { loc: [ 11, 17], note: "Lifecycle method-componentDidMount(): called when the component has mounted" },
              { loc: [ 11, 17], note: "Just calling tick function after a seconds interval" },
              { loc: [ 17, 20], note: "Lifecycle method-componentWillUnmount(): called when component will unmount" },
              { loc: [ 20, 28], note: "The render method" },
              { loc: [ 24, 25], note: "The way to access state" },
              { loc: [ 0, 32], title: "That's all folks!" }
            ]}
          />

          <Slide
            transition={["spin", "slide"]}
            bgColor="primary"
            notes="C"
          >
            <Timer />
          </Slide>

          <Slide
            transition={["spin", "slide"]}
            bgColor="tertiary"
            notes={`
              C
              React abstracts away the DOM from you, giving a simpler programming model and better performance. React
              implements one-way reactive data flow which reduces boilerplate and is easier to reason about than
              traditional data binding."
            `}
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Concepts and Theory
            </Heading>
            <Layout>
              <List textColor="primary">
                <Appear><ListItem>Static Mental Model</ListItem></Appear>
                <Appear><ListItem>Properties</ListItem></Appear>
                <Appear><ListItem>State</ListItem></Appear>
                <Appear><ListItem>Lifecycle</ListItem></Appear>
                <Appear><ListItem>Virtual DOM</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes="S"
          >
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

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes="S"
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              UI = f(state)
            </Heading>
            <Text textColor="primary">i.e. a static mental model for your application</Text>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes={`
              C
              props (short for properties) are a Component"s configuration, its options if you may. They are received
              from above and immutable as far as the Component receiving them is concerned.

              A Component cannot change its props, but it is responsible for putting together the props of its child
              Components.
            `}
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Props
            </Heading>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes={`
              C
              The state starts with a default value when a Component mounts and then suffers from mutations in time
              (mostly generated from user events).

              A Component manages its own state internally, but—besides setting an initial state—has no business
              fiddling with the state of its children. You could say the state is private.
            `}
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              State
            </Heading>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            className="text-center"
            notes={`
              C : Understanding the component lifecycle will enable you to perform certain actions when
              a component is created or destroyed. Further more it gives you the opportunity to decide
               if a component should be updated in the first place and to react to props
                or state changes accordingly.
            `}
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Life cycle
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <Heading size={4} caps textColor="tertiary" bgColor="primary" margin={10}>
                    INITIAL
                  </Heading>
                </Appear>
                <List>
                  <Appear><ListItem {...llis}><Code {...llis}>getDefaultProps</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>getInitialState</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>render</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>componentDidMount</Code></ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Appear>
                  <Heading size={4} caps textColor="tertiary" bgColor="primary" margin={10}>
                    update
                  </Heading>
                </Appear>
                <List>
                  <Appear><ListItem {...llis}><Code {...llis}>componentWillReceiveProps</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>shouldComponentUpdate</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>render</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>componentWillUpdate</Code></ListItem></Appear>
                  <Appear><ListItem {...llis}><Code {...llis}>componentDidUpdate</Code></ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Appear>
                  <Heading size={4} caps textColor="tertiary" bgColor="primary" margin={10}>
                    destroy
                  </Heading>
                </Appear>
                <List>
                  <Appear><ListItem {...llis}><Code {...llis}>componentWillUnmount</Code></ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes={`C:`}
          >
            <Image src={images.lifecycle.replace("/", "")} margin="0px auto 40px" height="700px"/>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes={`
              S:
              Some kind of light weight copy of our DOM. We can change it as we want and then save to our real DOM
              tree. When we save it we should compare, find difference and change (re-render) what should be
              changed. It is much faster than working directly with DOM, because it doesn"t require all the
              heavyweight parts that go into a real DOM.

              But only if we are working with it in a right way. There are two problems to solve:
              When re-render the DOM and How to do it efficiently.
              When: When the data is changed and needed to be updated. But how do we know that the data is changed?
              We have two options here.
              Dirty checking - poll the data at a regular interval and check all of the values in the data
              structure recursively.
              Observable:is to observe for the state change. If nothing has changed, we do nothing.
              If it changed, we know exactly what to update.
              How. What makes it really fast is:

              Efficient diff algorithms.
              Batching DOM read/write operations.
              Efficient update of sub-tree only.
            `}
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary" >
              The Virtual DOM
            </Heading>
            <Appear><Text textColor="primary">What? - An abstract version of original DOM</Text></Appear>
              <Layout>
                <Fill>
                  <Appear>
                  <Heading size={4} caps textColor="tertiary" bgColor="primary" margin={10}>
                    BENEFITS
                  </Heading>
                </Appear>
                  <List>
                    <Appear><ListItem textColor="primary">Easier to deal with</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Faster</ListItem></Appear>
                  </List>
                </Fill>
                <Fill>
                  <Appear>
                  <Heading size={4} caps textColor="tertiary" bgColor="primary" margin={10}>
                    WORKINGS
                  </Heading>
                </Appear>
                  <List>
                    <Appear><ListItem textColor="primary">Find out when to re-rerender</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Efficiently find the diff</ListItem></Appear>
                    <Appear><ListItem textColor="primary">Batch DOM read/write operations</ListItem></Appear>
                  <Appear><ListItem textColor="primary">Update only the subtree</ListItem></Appear>
                  </List>
                </Fill>
              </Layout>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="tertiary"
            notes="S:ReactJS - A declarative, efficient, and flexible JavaScript library for building user interfaces"
          >
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary" >
              The Virtual DOM
            </Heading>
            <Image src={images.vdom.change.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Image src={images.vdom.result.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>

          <Slide
            transition={["zoom", "fade"]}
            bgColor="tertiary"
            notes={`
              S: react always marketed itself as the “V” in “MVC.” This caused some amount of frustration among web
              developers, who are used to working with complete frameworks. How do I fill in the missing pieces?
              Should I write my own? Should I just use an existing library? If so, which one?
            `}
          >
            <Heading caps fit textColor="primary">React Ecosystem</Heading>
              <List textColor="primary">
                <Appear><ListItem textColor="primary">ES6/ES2015 and ES7</ListItem></Appear>
                <Appear><ListItem textColor="primary">Build System: Webpack, Babel, npm, ...</ListItem></Appear>
                <Appear><ListItem textColor="primary">Routing: react-router, ...</ListItem></Appear>
                <Appear><ListItem textColor="primary">Application Architecture (Flux): Redux, Facebook"s Flux, Alt..</ListItem></Appear>
                <Appear><ListItem textColor="primary">InlineCSS: Radium, Aphrodite, ...</ListItem></Appear>
                <Appear><ListItem textColor="primary">And many more ...</ListItem></Appear>
              </List>
          </Slide>

          <Slide
            transition={["slide"]}
            bgColor="secondary"
            notes="C"
          >
            <GitHubCards />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="C" >
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Thank you.
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
