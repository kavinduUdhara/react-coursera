# Props and children

Previously, you learned to pass props to and within a component. But there is also a special prop called props.children, which is automatically passed to every component. In this reading, you’ll learn about props.children and its purpose.

To understand the concept of props.children, consider the following real-life situation: you have a couple of apples, and you have a couple of pears. You'd like to carry the apples some distance, so obviously, you'll use a bag.

It's not a "bag for apples", and it's not a "bag for pears." It's just a bag. Nothing about this bag makes it such that it needs to be referred to as a bag in which you'd only and always carry apples, nor a bag in which you'd only and always carry pears.

In a way, the bag "doesn't care" if it is used to carry apples or pears. Nothing about the bag changes. There are no changes in the bag's material, size, shape, or color - because it can handle apples or pears being carried inside, without issues.

Now, consider the following component:

```javascript
function Apples(props) {
  return (
    <div className="promo-section">
        <div>
            <h2>These apples are: {props.color}</h2>
            </div>
            <div>
            <h3>There are {props.number} apples.</h3>
        </div>
    </div>
  )
}
export default Apples
```

There is also a Pears component:
```javascript
function Pears(props) {
  return (
    <h2>I don't like pears, but my friend, {props.friend}, does</h2>
  )
}
```

Now, the question is this: Let's say you want a Bag component, which can be used to "carry" Apples or Pears. How would you do that?

This is where props.children comes in.

You can define a Bag component as follows:
```javascript
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag
```

So, what this does in the Bag component is: it adds a wrapping div with a specific styling, and then gives it props.children as its content.

But what is this props.children?

Consider a very simple example:
```javascript
<Example>
    Hello there
</Example>
```

The Hello there text is a child of the Example JSX element. The Example JSX Element above is an "invocation" of the Example.js file, which, in modern React, is usually a function component.

This Hello there text can be passed as a named prop when rendering the Example component.

Here's what that would look like:
```javascript
<Example children="Hello there" />
```


There are two ways to perform this action. But this is just the beginning.

What if you, say, wanted to surround the Hello there text in an h3 HTML element?

Obviously, in JSX, that is easily achievable:

```javascript
<Example children={<h3>Hello there</h3>} />
```
What if the `<h3>Hello there</h3>` was a separate component, for example, named Hello?

In that case, you'd have to update the code like this:
```javascript
<Example children={<Hello />} />
```

You could even make the Hello component more dynamic, by giving it its own prop:
```javascript
<Example children={<Hello message="Hello there" />} />
```

So, how can you make the Bag, Apples, and Pears examples from the beginning of this reading work?

Here's how you'd render the Bag component with the Apples component as its props.children:
```javascript
<Bag children={<Apples color="yellow" number="5" />} />
```

And here's how you'd render the Bag component, wrapping the Pears component:
```javascript
<Bag children={<Pears friend="Peter" />} />
```

While the above syntax might look strange, it's important to understand what is happening.

Effectively, the above syntax is the same as the two examples below.
```javascript
<Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag>
```

You can even have multiple levels of nested JSX elements, or a single JSX element having multiple children, such as, for example:
```javascript
<Trunk>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
</Trunk>
```

So, in the above structure, there's a Trunk JSX element, inside of which is a single Bag JSX element, holding an Apples and a Pairs JSX element.

Before the end of this reading, consider this JSX element again:

```javascript
<Bag>
    <Apples color="yellow" number="5" />
</Bag>
```

<Bag>
    <Apples color="yellow" number="5" />
</Bag>

[Redirect to the resourse](https://www.coursera.org/learn/react-basics/supplement/mMqOU/props-and-children)


# Styling JSX elements

You’ve observed that JSX is incredibly versatile, and can accept a combination of JavaScript, HTML and CSS.  In this reading, you'll learn some approaches for styling JSX elements and doing so in a way that achieves both a functional and visual aspect within an app.

There are various ways to style JSX elements.

Probably the simplest way to do this is using the link HTML element in the head of the index.html file in which your React app will mount.

The href attribute loads some CSS styles, probably with some CSS classes, and then, inside the function component's declarations, you can access those CSS classes using the className attribute.

```javascript
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

In CSS:
```css
.promo-section {
    font-weight: bold;
    line-height: 20px;
}
```

Another way to add CSS styles to components is using inline styles.

The syntax of inline styles in JSX is a bit custom.

Consider a starting Promo component, containing code that you encountered earlier:

```javascript
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
```

Now you can add some inline styles to it:
```javascript
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
```

You can start updating the `Promo` component by adding the JavaScript expression syntax:

```javascript
<h1 style={}>
```

As explained previously, this means that whatever code you add inside these opening and closing curly braces is to be parsed as regular JavaScript. Now let’s add a *style object literal* inside of these curly braces:
```javascript
<h1 style={{color:"tomato",fontSize:"40px"}}>
```
You can then re-write this object literal:
```javascript
{
    color: "tomato",
    fontSize: "40px"
}
```

So, there's nothing special about this object, except for the fact that you’ve inlined it and placed it inside a pair of curly braces. Additionally, since it's just JavaScript, those CSS properties that would be hyphenated in plain CSS, such as, for example, `font-size:40px`, become camelCased, and the value is a string, making it look like this: `fontSize:"40px"`.

Besides inlining a style object literal, you can also save it in a variable, and then use that variable instead of passing an object literal.

That gives you an updated Promo component, with the styles object saved as a JavaScript variable:

```javascript
function Promo(props) {

const styles = {
    color: "tomato",
    fontSize: "40px"
}

return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

Using this approach makes your components more self-contained, because they come with their own styles built-in, but it also makes them a bit harder to maintain.

[Redirect to resourse doc](https://www.coursera.org/learn/react-basics/supplement/ouAVE/styling-jsx-elements)