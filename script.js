const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

const quotes = ["Don't diet. Eat meat, seafood, eggs, yogurt, fruit & veggies. Hydrate, lift weights, walk & get sunlight. Limit refined carbs, sugar & seed oils. This is the way ",
    "If you are a MOM or DAD, spending time on YOUR FITNESS is NOT selfish. It's self-less. You can't help others if you are sick and unhealthy. Take care of yourself so you can take care of others",
    "If you eat less, you'll lose WEIGHT. If you eat less & prioritize PROTEIN, you'll lose BODY FAT. If you eat less, prioritize PROTEIN, and LIFT WEIGHTS, you'll lose BODY FAT and GAIN MUSCLE.Congratz, now you have the secret",
    "The only home you own for life is your body. Don't destroy it... If it falls apart, there's no moving out",
    "People are scared of eating salt, eggs, meat & butter but have no issues eating Oreos, Cheetos & Pringles. Make it make sense.",
    "Blueberries are pound for pound the best fruits you can eat. They reduce inflamation, curb sugar cravings & are full of antioxidants. If you need a snack.Blueberries are a great option",
    "Have a SUGAR craving ? Have something SOUR to kick it. Lemon/lime juice, grapefruit, etc. Take some salt too.",
    "Stressed? Run, Moody? Take a nap, Angry? Lift weights, Sad? Get sunlight, Anxious? Walk. Your mental health can be improved by physical things",
    "BE BORING. Exercise at the same time. Eat at the same time. Sleep at the same time. Get up at the same time",
    "Top 10 Healthiest meats: Elk, Venison, Bison, Salmon, Beef, Turkey, Chicken, Lamb, White fish, Wild boar",
    "The more muscle you build, the easier it is to lose weight. Build muscle. You get to eat like a machine, you don't have to diet & you look better.Mo' muscle, less problems",
    "Exercising in the morning is one of the toughest but most rewarding things you can do. Start your day with an early win and create the momentum to propel yourself throughout the day",
    "Those who are in shape have discipline. It's as simple as that. They don't eat whatever they want. They don't workout only when they feel like it. They don't give into every craving they have",
    "Sunlight boosts your mood. Sunlight gives you energy. Sunlight calms your mind. Sunlight releases endorphins. Sunlight improves your sleep. Sunlight is the fire force for all living things.",
    "Getting in shape is 80% diet(eating healthy, saying no to junk food, not bingeing late at night) and 20% activity. Control what you put in your mouth.",
    "The best thing you can do for your health is to cook your own food. You save money. You get healthier. You feel better. You look better.",
    "Muscle is anti-aging. Muscle burns fat. Muscle allows you to eat more. Muscles make you look better. Muscle helps you live longer.",
    "Your kids will inherit your habits. If you eat healthy, they will eat healthy. If you exercise, they will exercise. Don't tell them what to do. Show them through actions.",
    "The better you go to bed, the better you will feel. Going to sleep at 9-10pm is a cheat code for weight loss, muscle gain & more energy. Going to bed early is the new badge of honor.",
    "You have no energy to workout because you don't workout. You have to give energy to get energy. A body in motion stays in motion. Newton's law applies to humans.",
    "Alcohol depletes the body of thiamine and magnesium. Coffee depletes the body of salt, iron, taurine, thiamine & potassium. Tea depletes the body of iron and thiamine."
]

 //Pick a random quote
 function newQuote(){
    authorText.textContent = "Chris Kuete"
    const quote = quotes[Math.floor(Math.random() * quotes.length)]

    if(quote.length > 120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote
    newQuote()
 }
 
newQuoteBtn.addEventListener('click', newQuote)
newQuote()
 

 





