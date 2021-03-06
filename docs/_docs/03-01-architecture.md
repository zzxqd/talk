---
title: Architecture Overview
permalink: /docs/architecture/
---

## Talk's Architecture

Talk consists of four distinct layers of code:

* Plugins
* Plugin API
* Core
* cli

### Plugins

Talk plugins deliver the features and functionality that can be changed or removed. Much of the default functionality is delivered by core plugins allowing developers to have control over any non-essential functionality.

### Plugin API

Talk plugins interact exclusively with the Plugin API. Maintaining this layer of separation between plugins and core allows us to consciously design the api that we want it publish to plugin authors. We can then expose just the elements of core that make sense and maintain that contract as core changes.

### Core

Talk core consists of architecture and functionality that deliver stability, security, scalability, extendability, etc... In addition, the Core contains features and functionality that is essential to the operation of Talk as a product.

Our goal is to continually extend our plugin infrastructure making the Core as pluggable as possible. Ultimately, a day may come where the Core of Talk is simply a framework for delivering a certain flavor of web applications.

### cli

Talk ships with [a cli tool]({{ "/docs/architecture/cli" | absolute_url }}) that exposes functionality to the command line. We seek to provide cli functionality for all features that could need to be accomplished programmatically or prior to the server's startup.

## Thinking about Plugins, the Plugin API and Core?

The following is a template for a thought process that may help clarify your ideas against the backdrop of Talk's architecture.

Think of a feature or capability. It could be something that's already in Talk or not. It could be something you want to build, or something you'd think would be a terrible idea. The important part here is to have something to interrogate.

```
wait(60000);
```

Now, ask these questions:

### Is it a Plugin?

Most work for Talk happens in the Plugin space. If the answers to any of these questions is Yes, then you're thinking of a Plugin.

* Does Talk's existing Plugin APIs support the thing you want to build?
* Is this something that only some users will want/need?
* Is this something that we want devs to iterate on widely?

You should [build it as a plugin]({{ "/docs/plugins/quickstart" | absolute_url }}). Feel free to explore here on your own or reach out to us. We love to advise on plugins, so please feel free to [let us know]({{ "/docs/development/contributing" | absolute_url }}#writing-code) and we will start a conversation. We will help you conceptualize, architect and promote your plugin if it is in line with our values.

### Does it need updates to the Plugin API?

If you answered yes above:

* Do I need to extend the Plugin API to support my plugin?

Often times all the functionality a plugin needs is in the Core, but the Plugin API doesn't expose it. In these cases, we seek to iteratively extend the Talk Plugin API. All Plugin API contributions from the community must begin by [let us know]({{ "/docs/development/contributing" | absolute_url }}#writing-code).

Note: we are stabilizing the process by which new Plugin API bindings are created, agreed upon and ultimately made part of our Plugins Contract. If you are interested in this process, please reach out to us.

### Does it require updates to the Plugin API _and_ Core?

What, if any, changes need to be made to Core so that the API can be extended?

Quite often the only things missing from Core are things like _events_, _slots_, _CSS classes_, etc... Adding these is a great way to become a Core Contributor and break new ground as a Plugin Developer.

We seek to keep Core as lean as possible.

### Is my idea really just Core?

Amazing! We are always looking to extend the capabilities of Talk. We look forward to discussing what you've got to bring!

Please see our [contributing guide]({{ "/docs/development/contributing" | absolute_url }}) for more information.
