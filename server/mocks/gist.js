module.exports = function(app) {
  var express = require('express');
  var gistRouter = express.Router();

  gistRouter.get('/users/:username/gists', function(req, res) {
    res.send(
      [
        {
          "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
          "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
          "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
          "id": "aa5a315d61ae9438b18d",
          "description": "description of gist",
          "public": true,
          "owner": {
            "login": "octocat",
            "id": 1,
            "avatar_url": "https://github.com/images/error/octocat_happy.gif",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
          },
          "user": null,
        //"files": {
        //  "ring.erl": {
        //    "size": 932,
        //    "raw_url": "https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl",
        //    "type": "text/plain",
        //    "truncated": false,
        //    "language": "Erlang"
        //  }
        //},
          "comments": 0,
          "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
          "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
          "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
          "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
          "created_at": "2010-04-14T02:15:15Z",
          "updated_at": "2011-06-20T11:34:15Z"
        }
      ]
    );
  });

  gistRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  gistRouter.get('/gists/:id', function(req, res) {
    res.send(
      {
        "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
        "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
        "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
        "id": "aa5a315d61ae9438b18d",
        "description": "description of gist",
        "public": true,
        "owner": {
          "login": "octocat",
          "id": 1,
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "gravatar_id": "",
          "url": "https://api.github.com/users/octocat",
          "html_url": "https://github.com/octocat",
          "followers_url": "https://api.github.com/users/octocat/followers",
          "following_url": "https://api.github.com/users/octocat/following{/other_user}",
          "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
          "organizations_url": "https://api.github.com/users/octocat/orgs",
          "repos_url": "https://api.github.com/users/octocat/repos",
          "events_url": "https://api.github.com/users/octocat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/octocat/received_events",
          "type": "User",
          "site_admin": false
        },
        "user": null,
        "files": {
          "ring.erl": {
            "size": 932,
            "raw_url": "https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl",
            "type": "text/plain",
            "language": "Erlang",
            "truncated": false,
            "content": "contents of gist"
          }
        },
        "comments": 0,
        "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
        "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
        "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
        "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
        "created_at": "2010-04-14T02:15:15Z",
        "updated_at": "2011-06-20T11:34:15Z",
        "forks": [
          {
            "user": {
              "login": "octocat",
              "id": 1,
              "avatar_url": "https://github.com/images/error/octocat_happy.gif",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "url": "https://api.github.com/gists/dee9c42e4998ce2ea439",
            "id": "dee9c42e4998ce2ea439",
            "created_at": "2011-04-14T16:00:49Z",
            "updated_at": "2011-04-14T16:00:49Z"
          }
        ],
        "history": [
          {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f",
            "version": "57a7f021a713b1c5a6a199b54cc514735d2d462f",
            "user": {
              "login": "octocat",
              "id": 1,
              "avatar_url": "https://github.com/images/error/octocat_happy.gif",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "change_status": {
              "deletions": 0,
              "additions": 180,
              "total": 180
            },
            "committed_at": "2010-04-14T02:15:15Z"
          }
        ]
      }
    );
  });

  gistRouter.put('/:id', function(req, res) {
    res.send({
      'gist': {
        id: req.params.id
      }
    });
  });

  gistRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/', gistRouter);
};
