First of all, thanks for applying in Origins Digital !

This technical test is a basic representation of our work in the frontend team.

## Getting Started

1. Fork the repository
2. Clone **your fork** on your local machine
3. Install dependencies
4. Start working here

## Requirements
- 100% responsive
- all data are fetched using `getStaticProps`, then rehydrated using `react-query` (you do not need to use the `<Hydrate />` component or the `dehydratedState` for this test!). Just use the `initialData` or `placeholderData` params of the `useQuery` hook and it will be fine enough.

> https://tanstack.com/query/v4/docs/guides/ssr

- you are free to use any libraries, but remember you will have to defend your choice within the interview after :) You will also have to defend your choice if you don't use any lib ;)
- There is `tailwindcss` already install as this is the main lib we are using for our CSS needs.
- Also, there is `@onrewind/ui`, which you can of course use ! You can head to [our Storybook](https://storybook.onrewind.tv/) to see our components if you want to use them. ⚠️ **You cannot use our Slider and Carousel component** ⚠️ 

## Workflow
Your commits will respect the standard of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). If you are not sure how to write them, you can use `yarn commit` instead of `git commit`.
As long as your commits respect this, you do not need to create a branch for every feature.

In the end, you create a PR on `master` branch, there will be a Github Action that will run ESLint and try to build your project. This Action have to pass.

## Misc
You can find some inspiration of projects we did:
- https://asse.tv/
- https://mauvetv.rsca.be/en
- https://dev-ott-v2.origins-digital.com/tech_test (this particular page, have the same data you receive for this test. You can use it as comparison)

If you have any question, you can ask them within the comments section on each issue, mentioning @Karnak19 or @StephaneL-OR .

You can head to #1 to start :) 
