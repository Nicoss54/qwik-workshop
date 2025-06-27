# What is Qwik?

Qwik is not another server side rendering framework. Qwik is a totally uniq framework by design and by the concepts used inside it.

**Why uniq ?** <br/><br/>
<!-- .element: class="important" -->

- No hydration <br/><br/>
- Resumability <br/><br/>
- Based on react rendering <br/><br/>
- Based on vite for bundling

##==##

# Just a qwik reminder about what is resumability

Resumability is the art to render a client side application or universal application on the server
and make the application dynamic without hydration

Resumability is based on three easy concepts <br/><br/>

- global event handler **responsible to listen all the interaction event** <br/><br/>
- serialization **responsible to serialize the state of the framework** <br/><br/>
- factory function **responsible to lazy recover the event handler** <br/><br/>

##==##

# Hydration vs Resumability

![center](assets/images/hydration_resumability.jpg)

##==##

<!-- .slide: class="with-code inconsolata" -->

# How to create an application

One command which depends on your package manager. For this workshop I use bun.

But you can replace **bun** by your favorite package manager, it will work as the same way. <br/><br/>

```shell
bun create qwik
```

<!-- .element: class="big-code" -->

<br/><br/>

This will bootstrap a Qwik application ready for production
<!-- .element: class="important" -->
