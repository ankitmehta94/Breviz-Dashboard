import {UPDATE_SUMMARY, CLICKED_TEXT, UPDATE_AGENDA} from '../../Constants/actionConstants';
  
//   import {disableLocationActiveState} from './hotelHelperFunctions';
  
  const actionCreator = (key, hasPayload = false) => {
    if (hasPayload) return payload => ({ type: key, payload: payload });
    return () => ({ type: key });
  };
  const sendAndSetTranscriptJSON = (jsonArray) => async(dispatch, getState, {api}) => {
    console.log(jsonArray,'<-----------------jsonArray')
    await api.post('upload',{jsonArray})
  }
  const sendTranscriptText = (transcriptText, transcriptionType) => async(dispatch, getState, {api}) => {
    const summaryType = 0;
    await api.post('upload',{transcriptText, transcriptionType, summaryType})
  }
 const dum = [
    {
        "id": 10,
        "dialogue": "Victor Rieman: The strike tracker form right yeah okay.\nAnkit Mehta: yeah, so this is yeah This is like how many strike locations and everything yeah.So this is this will let me differentiate code wise that like if I need to just look up one lat long or like multiple lifelong.\nVictor Rieman: lat long blank then.\nAnkit Mehta: yeah yeah leave it blank.Whatever you can't fail just leave blank here.So, this would be like 11 1112 days.\nVictor Rieman: Of yeah I do it, where I always county a starting day as I get done day two and ending yeah so it kind of adds one.Contract renewal.\nAnkit Mehta: Also, when you have multiple sources here same thing divided by semicolon.\nVictor Rieman: Okay, I just have one for this one, but okay.\nAnkit Mehta: Do you want to upload a source for this.\nVictor Rieman: um I can do that.\nAnkit Mehta: yeah I just want to show you where the location will be that's why.\nVictor Rieman: Okay um does any file type work I.\n"
    },
    {
        "id": 20,
        "dialogue": "Ankit Mehta: Do I mean to save it as like a PDF for.Every file type books okay.\nVictor Rieman: i'll do i'll do a PDF.\nAnkit Mehta: And you can do multiple files to that.\nJohnnie Kallas: So what was that file that Victor uploaded or were you guys explain that to me in a minute.\nAnkit Mehta: So.The gas in our last meeting if we could upload like PDF versions of like the source or things like that i'm not hundred percent sure what the reason for exactly the file is, but like it's fine it's basically that are talking about the source and.Things like that right.\nVictor Rieman: yeah so I did a.I took the web page that the Bloomberg sources, and then I did a like I printed it I hit print and then I saved it as a PDF just have like a backup of the web page.\nJohnnie Kallas: Oh, do you do that for maybe I should start doing that okay that makes sense.\nVictor Rieman: I haven't been doing it for the Bloomberg ones, but it.might not be a bad idea, just to be consistent, that I do that.\nAnkit Mehta: So, open up a negative agenda put another link just open that up.\nVictor Rieman: i'm.\n"
    },
    {
        "id": 30,
        "dialogue": "Ankit Mehta: Just copy paste and player place it on this chrome screen, so that, like we can also say I.\nVictor Rieman: can catch it.\nAnkit Mehta: So this is.The.folder that we've shared guru form.strike tracker form the folder.file responses.This is where it's stored.My resume is also there was also testing testing it, but I just wanted to show you this is where it will be, and it will have the same exact name of the file that you uploaded so there's no way to like tell that like which which location tracks, to which file all right.I mean i'm going to look into maybe if it's possible to do that, but right now that's not not something that I can do right now.\nVictor Rieman: Okay, look at what actually is.\nAnkit Mehta: But yeah So this is the simple research okay i'm gonna give you another.Link right now open that up to.yeah good, so this is what like the responses will look like it will have.The timestamp of when it got added into who added it and then keep scrolling horizontally.So you can see.lat long was immediately added I mean doesn't immediately it takes about like three to four seconds to actually get done, but he keeps lowering.All right, so you see the edit link.click on that.So this is how you would be editing things.So I mean change anything, I mean doesn't really matter so like yeah.\nVictor Rieman: i'm just here in change the name of the employer.\nJohnnie Kallas: So this is when we want to add additional information after the fact, or change things, yes, great.\nAnkit Mehta: Every database needs that perfect.yeah you can go to that I should.\nJohnnie Kallas: And we access that from the spreadsheet.\nAnkit Mehta: yeah.Ideally, what I would like to do is remove everyone's right permissions for this fight.So, no one can actually make changes to this file, except for like me technically or like whoever is like the authorized person so like at some point of time this form will have to change owners and.yeah whoever that person is.Should like would get this Okay, so I think, at least for the normal workflow this is working it's usable as on issue right and I just realized go to the very end.Good yeah just Dr dot Google where it's written right.\n"
    },
    {
        "id": 40,
        "dialogue": "Victor Rieman: This one.\nAnkit Mehta: No, no next one.Okay yeah yeah that's your file so file is also getting stored non issue.\nVictor Rieman: Oh Nice.\nAnkit Mehta: I don't know how we would do this for multiple but yeah Okay, so all of that works out.Now, can you do it for like the multiple one actually was trying to test this myself, but I really couldn't understand.The way you to actually return the addresses for that thing.Yes, the summit another response.\nVictor Rieman: So, this would be the.\nAnkit Mehta: 11th one is the one that i'm actually talking about on the normal strike.\nVictor Rieman: location one yeah okay.\nAnkit Mehta: This will take you a bit because you have 11 strike positions, so this is possibly so you if you want, since the nothing else changes you don't need to write down everything just me if you want to do the addresses because everything is the same that also works for me.\nVictor Rieman: Okay yeah this is.\nAnkit Mehta: More like waste your time too much.\n"
    },
    {
        "id": 50,
        "dialogue": "Victor Rieman: So we should I do the thing with a every addresses separated by the semi colon yes okay i'll just copy and paste it then the way was inputted because I Oh well, Okay, the address part is right i'm going to have to change it for the.\nAnkit Mehta: yeah, but you will have to remove the city's from this too and you'll have to remove the zip codes and you'll have to remove it or not.OK OK.\nVictor Rieman: Here, let me.\nAnkit Mehta: This is only if capturing cities separately, is important if it's just okay being like one string then.I don't see the problem in just doing this, where it's everything is together it's technically they're less going for me, but if you want to capture stuff separate like for like at least four states, it would be important, because we want to filter by state.But otherwise that's why we need if we want to filter by anything we need a separate points.And yeah if it's repeated Chicago then like just repeat Chicago as many times as you need it.\nVictor Rieman: yeah I mean I would be okay with us just getting rid of the city, then so, then the address contains all of it, but maybe so have stayed separate in the future.\nAnkit Mehta: john, what do you think if that's okay with you, if you don't need to capture cities, specifically.separately.\nJohnnie Kallas: i'm sorry to be a pain in the ass you guys, but can we keep cities for now.\nAnkit Mehta: I mean it's not an issue for me because i've already done all the required coding for this song an extra.\nJohnnie Kallas: Then Victor i'm sorry to be a pain in the ass for you and.\nVictor Rieman: Hopefully we don't have many of these again.\n"
    },
    {
        "id": 60,
        "dialogue": "Johnnie Kallas: want me to read them out to you how would I do that.\nVictor Rieman: yeah sure it's I think oaklawn Illinois where I am right now.\nJohnnie Kallas: yeah then Chicago.Okay, it looks like bloomingdale.Then.Is that pit task, I think it a SCA.Then moments mo m E MC.\nAnkit Mehta: One that'd be seen moments.\nJohnnie Kallas: um.\nVictor Rieman: I think it's walnut street.\nAnkit Mehta: See that's what was confusing me because I was like is it locked up bloomingdale that doesn't make sense for the city's name.\nJohnnie Kallas: And then streeter str EA to our.\nVictor Rieman: I think that's 11 then.yeah yep.\nAnkit Mehta: You can just copy paste Illinois like 11 times.\n"
    },
    {
        "id": 70,
        "dialogue": "Victor Rieman: Oh right I just.\nAnkit Mehta: copy this and then just yeah.\nJohnnie Kallas: don't scroll down for zip code, so I can read all of them out to you because I can see him right now.Okay, you ready.yep 60714.\nVictor Rieman: Okay.\nJohnnie Kallas: 6080460614 606-256-0625 again.604 or 536064360108 601-436-0954.\nAnkit Mehta: And finally 613648 to do this, but you'd also have to remove all of this information from the addresses.\nVictor Rieman: Okay, I get it in.\nAnkit Mehta: A job just leave the semi colon.\nJohnnie Kallas: You need a semi colon here for the last one on kid or now.\nAnkit Mehta: You actually don't put it in the last one okay.\n"
    },
    {
        "id": 80,
        "dialogue": "Victor Rieman: Okay, this one.\nAnkit Mehta: Oh cool just summit.And do do me a favor.Right click on the edit your response fit.And then copy link address.\nVictor Rieman: Okay, send it to me.\nAnkit Mehta: Like to put in the chat.yeah just click on the latitude longitude.Okay.All right, um it did not work so i'll have to see why.Okay, so.This is using usable for you guys right.\nVictor Rieman: yeah.\nAnkit Mehta: All right, alright i'm not done yet, because I mean clearly there's some problem that's come up, but I will fix it and then probably.end of this week, I should have some like you can start filling it in um How would you want to move data from one place to the other.There are two options one option is obviously the copy paste the sheet one end to the other, which would still take some effort, because we don't have all the same columns right now we definitely would not have the.anytime in the same model, but we definitely would not have the edit link at that point of time, the other way, is doing it for every form one by one, but that's like at forms to fill.So, but that way you would always have an edit link for this, so this is basically.\nJohnnie Kallas: i'm.\nAnkit Mehta: happy to answer to me right now think about it.\nJohnnie Kallas: yeah sounds good, one thing.\nAnkit Mehta: Because yeah I mean the edit link is the only option so like at some point of time if you're Okay, if you don't want anyone to mess, with the data is the best thing is to do is.Only let one person control it right like one person enters and like removes the data which would be the form itself the code that is behind the form.And if we do that, then we have to fill it formed by one by one, for the form, if you just need the sheet open, at least initially, then you wouldn't have edit links for any of those first at.Things that we input.\n"
    },
    {
        "id": 83,
        "dialogue": "Johnnie Kallas: And the other banks are what you need to make out yeah.\nAnkit Mehta: Because if you pages copy paste into this, then I don't think we can edit them they'd like from the then the edit form won't be generated because there was no form.\nJohnnie Kallas: So I think what we'll do Victor if you can try and I know you're busy this week, but if you can make your one priority this week to just fill in those end dates like we talked about if you're able to, or just filling.there's a couple other missing information that I actually need to talk through at our next meeting, but fill in whatever you can fill in that's not filled in and i'll take the leadership on transferring everything over yeah.\n"
    },
    {
        "id": 84,
        "dialogue": "Ankit Mehta: don't.I got night now.\n"
    },
    {
        "id": 85,
        "dialogue": "Johnnie Kallas: let's complete yeah yeah until you give me the go ahead on can I won't do anything but when you do i'll take care of that alright.\n"
    },
    {
        "id": 86,
        "dialogue": "Ankit Mehta: Alright, this was everything that I needed to see for now.yeah.i'll just fix what whatever this problem is and then it never yeah and then I contact you never works on the first never.\n"
    },
    {
        "id": 87,
        "dialogue": "Johnnie Kallas: I thought it seems like it's working just besides the.\n"
    },
    {
        "id": 88,
        "dialogue": "Ankit Mehta: Multiple location location is the thing that i'm complaining.\n"
    },
    {
        "id": 89,
        "dialogue": "Johnnie Kallas: yeah I mean this looks great to me so good work, and this will make it easier on our part in the long run to.\n"
    },
    {
        "id": 90,
        "dialogue": "Victor Rieman: alright.\n"
    },
    {
        "id": 91,
        "dialogue": "Johnnie Kallas: Alright, thanks guys talk to you next week.\n"
    }
]
const Actions = { sendAndSetTranscriptJSON, sendTranscriptText }
export default Actions
