# CrashChat
This is an example application which uses CrashDB to store data. \br
It serves as a very simplistic forum where users can type in messages and have other users see all past messages on refresh. \br
Currently, I don't have a website of it running, but with port-forwarding, you should be able to set up your own (for whatever reason) \br

## Running
First, start an instance of [CrashDB](https://github.com/EIG520/CrashDB) on port 8080. \br
Initialize the database by running the following on some CrashDB cli:
```
NOSQL CLIENT
CrashDB> set entries 0
done (530.219µs)
CrashDB> touch msgs table
done (452.47µs)
```

Install npm, and run the following: \br
```
$ git clone https://github.com/EIG520/crashchat.git
$ cd crashchat
$ npm install
$ npm run test
```

This should start it running.  \br
Now visit [localhost:3000](https://localhost:3000), type something into the box, click submit, and refresh. \br
What you typed should show up on the screen in a blue box. \br
Now if you port-forward this, then anyone should be able to see anyone else's messages! \br
