import {atom} from 'recoil'

export const Post = atom({
    key : "Post" ,
    default :  [
        {
            id : 1,
            name  : 'The White House',
            handlerName : '@The White House' ,
            organization : 'United States government organization',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets : [
                {
                    tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                    tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
                    tweetCount : 100,
                    retweetCount : 100 ,
                    likesCount : 100,
                    viewsCount : '102k',
                    TweetReplies : [
                        {
                            name : 'Arjun ranavat',
                            handlerName : '@Arjun6787',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                        {
                            name : 'charls Darvin',
                            handlerName : '@charls',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                    ]
                }
            ]
        },
        {
            id:2,
            name : 'Mukund',
            handlerName : '@kumarmukund',
            organization : '',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets:[
                {
                    tweetText : 'For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.',
                    tweetPic : 'https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080',
                    tweetCount : 200,
                    retweetCount : 200 ,
                    likesCount : 200,
                    viewsCount : '10k',
                    hastags : ['#wildLife','#photoGraphy'],
                    TweetReplies : [
                        {
                            name : 'Karan kumar',
                            handlerName : '@Kkumar',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                        {
                            name : 'Darshan patra',
                            handlerName : '@patraD7898',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
    
                    ]
                }
            ]
        },
        {
            id : 3,
            name : 'Usain St. Leo Bolt',
            handlerName : '@usainbolt',
            organization : '',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets : [
                {
                    tweetText : 'Earned..Not Given..Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                    tweetPic : 'https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080',
                    tweetCount : 700,
                    retweetCount : 700 ,
                    likesCount : 900,
                    viewsCount : '100k',
                    refLink : 'https://www.globalwildlife.org/blog/',
                    TweetReplies : [
                        {
                            name : 'Akshay chaudari',
                            handlerName : '@AC',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                        {
                            name : 'Sujeet mandale',
                            handlerName : '@Er_Sujeet',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                    ]
               }
            ]  
        },
        {
            id : 4,
            name : 'Andrew Elliott',
            handlerName : '@andrewje_home',
            organization : '',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets : [
                {
                    tweetText : 'Stolen.. Not earned. ',
                    tweetPic : 'https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080',
                    tweetCount : 400,
                    retweetCount : 327 ,
                    likesCount : 90,
                    viewsCount : '7k',
                    hastags : ['#sports','#Winners'],
                    TweetReplies : [
                        {
                            name : 'Rajan kashyap',
                            handlerName : '@kashyapR',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                        {
                            name : 'Shreyash',
                            handlerName : 'I_am_shreyash',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                    ]
                }
            ]  
        },
        {
            id: 5,
            name : 'RVCJ Media',
            handlerName : '@RVCJ_FB',
            organization : '',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets : [
                {
                    tweetText : 'Well Played Team India ',
                    tweetPic : 'https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080',
                    tweetCount : 650,
                    retweetCount : 699 ,
                    likesCount : 900,
                    viewsCount : '17k',
                    hastags : ['#HockeyLover' , '#Hockey' , '#Team India'],
                    TweetReplies : [
                        {
                            name : 'Durgen',
                            handlerName : '@Mess_owner',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                        {
                            name : 'charls Darvin',
                            handlerName : '@charls',
                            tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        },
                    ]
                }
            ]
        },
    
    ]
})