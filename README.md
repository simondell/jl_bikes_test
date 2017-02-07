# Penn E. Farthing Bikes

A front-end development test project. The full test instructions can be [found on github][jhar].



## The User story

As a user, Assuming I have access to a modern web browser (chrome) with an internet connection and I am visiting the page

I would like to see a list/grid of bikes (taken from the bike data URL below)
I would like to see a the name, an image, a description and the class for each bike
I would like to be able to sort the bikes into a custom order based on class
I would like my custom order to be saved and not change when I refresh the page



## Development

The solution makes use of [create-react-app][crapp] to shortcut setting up build and deploy tools.

```bash
git clone git@github.com:simondell/jl_bikes_test.git
cd jl_bikes_test
npm start
```


### Application design

The application should fulfill two sets of criteria

1. establish the brand
2. facilitiate the user journey described above (features!)

These responsibilities can be encapsulated in components.

┌────────────────────────────────────┐
│App                                        │
│┌──────────────────────────────────┐│
││header                                   ││
││                                         ││
││                                         ││
│└──────────────────────────────────┘│
│┌──────────────────────────────────┐│
││Bikes                                    ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
││                                         ││
│└──────────────────────────────────┘│
└────────────────────────────────────┘


## Deployment

The site has hosting on github pages, using the project pages feature. [View it here][site]

During development, type the following to deploy:

```bash
npm run deploy
```

This will build and deploy the project.

[jhar]: https://github.com/jujhars13/dev-test-frontend
[site]: https://simondell.github.io/jl_bikes_test
[crapp]: https://github.com/facebookincubator/create-react-app
