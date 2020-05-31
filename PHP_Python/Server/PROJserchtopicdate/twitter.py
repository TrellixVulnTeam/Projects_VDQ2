
import os
import re
import tweepy
from tweepy import OAuthHandler
from textblob import TextBlob

import datetime

import credvar

startDate = datetime.datetime(2006, 1, 1, 0, 0, 0)   
endDate =   datetime.datetime(2019, 9, 30, 0, 0, 0)

class TwitterClient(object):
    '''
    Generic Twitter Class for the App
    '''
    def __init__(self, query, retweets_only=False, with_sentiment=False):
        # keys and tokens from the Twitter Dev Console
        #consumer_key = os.environ['CONSUMER_KEY']
        #consumer_secret = os.environ['CONSUMER_SECRET']
        #access_token = os.environ['ACCESS_TOKEN']
        #access_token_secret = os.environ['ACCESS_TOKEN_SECRET']
        
        consumer_key = credvar.CONSUMER_KEY
        consumer_secret = credvar.CONSUMER_SECRET
        access_token = credvar.ACCESS_TOKEN
        access_token_secret = credvar.ACCESS_TOKEN_SECRET
        
        
        
        # Attempt authentication
        try:
            self.auth = OAuthHandler(consumer_key, consumer_secret)
            self.auth.set_access_token(access_token, access_token_secret)
            self.query = query
            self.retweets_only = retweets_only
            self.with_sentiment = with_sentiment
            self.api = tweepy.API(self.auth)
            self.tweet_count_max = 1000
            #self.startDate = datetime.datetime(2006, 1, 1, 0, 0, 0)
            #self.endDate =   datetime.datetime(2019, 30, 9, 0, 0, 0)
            #startDate = datetime.datetime(2006, 1, 1, 0, 0, 0)   
            #endDate =   datetime.datetime(2019, 9, 30, 0, 0, 0)
        except:
            print("Error: Authentication Failed")
   
# startDate = datetime.datetime(2006, 1, 1, 0, 0, 0)   
# endDate =   datetime.datetime(2019, 30, 9, 0, 0, 0)
    
    # def set_styr(self, st=''):
        # #print("hello")
        # sy = int(st)
        # #self.startDate = datetime.datetime(sy, 1, 1, 0, 0, 0)
        # global startDate
        # startDate = datetime.datetime(sy, 1, 1, 0, 0, 0)
        # #print(startDate)
    
    def set_yer(self, dt='', mn='', yer=''):
        d = int(dt)
        m = int(mn)
        y = int(yer)
        #self.endDate =   datetime.datetime(ey, 9, 30, 0, 0, 0)
        global startDate
        startDate = datetime.datetime(y, m, d, 0, 0, 0)
        global endDate
        endDate =   datetime.datetime(y, m, d, 23, 59, 0)
        #print("hai")
        #print(endDate)
    
    

    def set_query(self, query=''):
        self.query = query

    def set_retweet_checking(self, retweets_only='false'):
        self.retweets_only = retweets_only

    def set_with_sentiment(self, with_sentiment='false'):
        self.with_sentiment = with_sentiment

    def clean_tweet(self, tweet):
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())

    def get_tweet_sentiment(self, tweet):
        analysis = TextBlob(self.clean_tweet(tweet))
        if analysis.sentiment.polarity > 0:
            return 'positive'
        elif analysis.sentiment.polarity == 0:
            return 'neutral'
        else:
            return 'negative'

    def get_tweets(self):
        tweets = []

        try:
            recd_tweets = self.api.search(q=self.query,
                                          count=self.tweet_count_max)
            if not recd_tweets:
                pass
            for tweet in recd_tweets:
                parsed_tweet = {}
            
               # if tweet.created_at < self.endDate and tweet.created_at > self.startDate:
                if tweet.created_at < endDate and tweet.created_at > startDate:
                
                    #print(startDate)
                    #print(endDate)
                    parsed_tweet['text'] = tweet.text
                    parsed_tweet['user'] = tweet.user.screen_name
                
                    if self.with_sentiment == 1:
                        parsed_tweet['sentiment'] = self.get_tweet_sentiment(tweet.text)
                    else:
                        parsed_tweet['sentiment'] = 'unavailable'

                    if tweet.retweet_count > 0 and self.retweets_only == 1:
                        if parsed_tweet not in tweets:
                            tweets.append(parsed_tweet)
                    elif not self.retweets_only:
                        if parsed_tweet not in tweets:
                            tweets.append(parsed_tweet)

            return tweets
            
            

        except tweepy.TweepError as e:
            print("Error : " + str(e))
