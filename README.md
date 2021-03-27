You are given link of IPL 2020-2021 home page.
https://www.espncricinfo.com/series/ipl-2020-21-1210595.
You need to scrap data using this link in the format displayed below.

1. Create a folder of ipl 2020.
2. Inside that folder create folders for each team playing in that ipl.
3. Create Json file of each batsman in that team folder 
in which we will store details of the player in the form of array of object where each object should describe a particular match played by a player. 
Details of an object includes
	a. Runs, balls, sixes , fours, sr for that match
	b. date ,venue ,result and opponent name for that match
  
  example:
  [
  {
    "runs": "31",
    "balls": "11",
    "fours": "2",
    "sixes": "3",
    "SR": "281.82",
    "venue": "Dubai",
    "date": "Oct 29 2020",
    "opponent": "Kolkata Knight Riders",
    "result": "Super Kings won by 6 wickets"
  }
][
  {
    "runs": "35",
    "balls": "30",
    "fours": "4",
    "sixes": "0",
    "SR": "116.67",
    "venue": "Abu Dhabi",
    "date": "Oct 19 2020",
    "opponent": "Rajasthan Royals",
    "result": "Royals won by 7 wickets (with 15 balls remaining)"
  }
][
  {
    "runs": "33",
    "balls": "13",
    "fours": "0",
    "sixes": "4",
    "SR": "253.85",
    "venue": "Sharjah",
    "date": "Oct 17 2020",
    "opponent": "Delhi Capitals",
    "result": "Capitals won by 5 wickets (with 1 ball remaining)"
  }
][
  {
    "runs": "7",
    "balls": "6",
    "fours": "1",
    "sixes": "0",
    "SR": "116.67",
    "venue": "Sharjah",
    "date": "Oct 23 2020",
    "opponent": "Mumbai Indians",
    "result": "Mum Indians won by 10 wickets (with 46 balls remaining)"
  }
][
  {
    "runs": "21",
    "balls": "8",
    "fours": "3",
    "sixes": "1",
    "SR": "262.50",
    "venue": "Abu Dhabi",
    "date": "Oct 7 2020",
    "opponent": "Kolkata Knight Riders",
    "result": "KKR won by 10 runs"
  }
][
  {
    "runs": "12",
    "balls": "9",
    "fours": "1",
    "sixes": "0",
    "SR": "133.33",
    "venue": "Dubai",
    "date": "Sep 25 2020",
    "opponent": "Delhi Capitals",
    "result": "Capitals won by 44 runs"
  }
][
  {
    "runs": "1",
    "balls": "2",
    "fours": "0",
    "sixes": "0",
    "SR": "50.00",
    "venue": "Sharjah",
    "date": "Sep 22 2020",
    "opponent": "Rajasthan Royals",
    "result": "Royals won by 16 runs"
  }
][
  {
    "runs": "50",
    "balls": "35",
    "fours": "5",
    "sixes": "2",
    "SR": "142.86",
    "venue": "Dubai",
    "date": "Oct 2 2020",
    "opponent": "Sunrisers Hyderabad",
    "result": "Sunrisers won by 7 runs"
  }
][
  {
    "runs": "10",
    "balls": "5",
    "fours": "2",
    "sixes": "0",
    "SR": "200.00",
    "venue": "Abu Dhabi",
    "date": "Sep 19 2020",
    "opponent": "Mumbai Indians",
    "result": "Super Kings won by 5 wickets (with 4 balls remaining)"
  }
][
  {
    "runs": "25",
    "balls": "10",
    "fours": "3",
    "sixes": "1",
    "SR": "250.00",
    "venue": "Dubai",
    "date": "Oct 13 2020",
    "opponent": "Sunrisers Hyderabad",
    "result": "Super Kings won by 20 runs"
  }
][
  {
    "runs": "7",
    "balls": "6",
    "fours": "1",
    "sixes": "0",
    "SR": "116.67",
    "venue": "Dubai",
    "date": "Oct 10 2020",
    "opponent": "Royal Challengers Bangalore",
    "result": "RCB won by 37 runs"
  }
]

