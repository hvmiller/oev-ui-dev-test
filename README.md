# OctopusEV UI Technical Test

Welcome to OctopusEV's technical task for the UI/UX Developer role. This test focuses on accessibility, semantic markup, and styling.

### System requirements
- Node.js 18+
- Typescript 5+

## Getting Started

This repo is a default installation of [Next.js](https://nextjs.org/) with Storybook and styled-components already installed and configured.

- Fork the repo and run `yarn install`
- `yarn storybook` will run Storybook

After this, a new tab will open with Storybook running on `http://localhost:6006/`

### Note
- This is a standard installation of Next.js. You shouldn't need to make any changes to get Storybook running.
- Feel free to modify and install whatever code you feel is necessary.

## Tasks

### 1. Markup
Think about how this component could be improved semantically, is there better markup that could be used for the content. From an accessibility point of view, think about how this could be improved.

> Semantically and for accessibility, the heading level of the cards should be updated depending on the context they are used it. Headings must always follow order, and assistive tech also relies on these making sense. If it became regularly neccesary to change heading level, this could be added in as a prop. 
> For the button, I've updated it to use a standard anchor tag which is much more accessible and standard practice for links - either when taking the user elsewhere or within the page. If the cards needed a button that triggered functionality other than this, a standard button should be used instead.

### 2. Styling
Using your design from the Figma task, style this component to match. 

### 3. Storybook
Currently this component has one story, think about capturing other potential use cases of this component.

### 4. Organisation
If you have time, think about the structure of the app. There is no right or wrong here, we're just interested to know how you would structure your components/stories/styles

> I've moved styles to exist next to the component they affect. This is a personal preference as when working in large codebases it's much easier to have all you need for a component in the same folder. If testing, I would add the unit test file within each of the component folders too. I moved utils out for convenience, however I would potentially rethink their location within the context of a larger application, to ensure they are easy to find as style utils, and not confused with functional utils or other helpers.

## Suggested Time
We appreciate your time is valuable and we suggest you don't spend more than a couple of hours on these tasks. Please provide notes for anything else you would have done given more time