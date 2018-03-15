// Keep the year up to date
var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// Rotating background image
var heroBgList = ['hero-1', 'hero-2', 'hero-3'];
var randomHeroBg = heroBgList[Math.floor(Math.random()*heroBgList.length)];
document.getElementById('hero').classList = randomHeroBg;

// Mobile images
var imgs = document.getElementsByClassName('mobile');
for (var i = 0; i < imgs.length; i++) {
  var num = Math.floor(Math.random() * 3 + 1);
  imgs[i].src = 'img/hero-' + num + '-sm.jpg';
  imgs[i].alt = imgs[i].src;
}

// Reviews from Google and Facebook
var reviewsArray = [];
var siteReviews = {
    "reviews": [{
            "review": "“I would highly recommend Gratitude Beauty to anyone who is looking for, or has eyelash extensions.”",
            "source": "Google",
            "link": "https://www.google.ca/search?q=Gratitude+Beauty+-Eyelash+extensions,+Facials,+Permanent+make-up,+3630+Brentwood+Rd+NW+%23232C+Calgary,+AB+T2L+1K8&ludocid=13789624131299997506&gws_rd=cr&dcr=0&ei=4VH_WfK8HcnYjwOb7J2IAQ#gws_rd=cr&lrd=0x53716f0d5888de3b:0xbf5e96163c4a7742,1"

        },
        {
            "review": "“The eyelash technicians are absolutely amazing. You fall asleep and have a restful nap then wake up with beautiful lashes. They go out of their way to make the experience wonderful.”",
            "source": "Google",
            "link": "https://www.google.ca/search?q=Gratitude+Beauty+-Eyelash+extensions,+Facials,+Permanent+make-up,+3630+Brentwood+Rd+NW+%23232C+Calgary,+AB+T2L+1K8&ludocid=13789624131299997506&gws_rd=cr&dcr=0&ei=4VH_WfK8HcnYjwOb7J2IAQ#gws_rd=cr&lrd=0x53716f0d5888de3b:0xbf5e96163c4a7742,1"
        },
        {
            "review": "“I highly recommend them. I got top and bottom eyelash extensions, as well as my nails done. I am very happy with their work. The staff was also friendly, polite, and professional. I would give them more stars if I could.”",
            "source": "Google",
            "link": "https://www.google.ca/search?q=Gratitude+Beauty+-Eyelash+extensions,+Facials,+Permanent+make-up,+3630+Brentwood+Rd+NW+%23232C+Calgary,+AB+T2L+1K8&ludocid=13789624131299997506&gws_rd=cr&dcr=0&ei=4VH_WfK8HcnYjwOb7J2IAQ#gws_rd=cr&lrd=0x53716f0d5888de3b:0xbf5e96163c4a7742,1"
        },
        {
            "review": "“Gratitude Beauty is amazing. It is clean, honest and professional. I have been getting my eyelashes done here since it opened and will never go anywhere else!”",
            "source": "Google",
            "link": "https://www.google.ca/search?q=Gratitude+Beauty+-Eyelash+extensions,+Facials,+Permanent+make-up,+3630+Brentwood+Rd+NW+%23232C+Calgary,+AB+T2L+1K8&ludocid=13789624131299997506&gws_rd=cr&dcr=0&ei=4VH_WfK8HcnYjwOb7J2IAQ#gws_rd=cr&lrd=0x53716f0d5888de3b:0xbf5e96163c4a7742,1"
        },
        {
            "review": "“I had my eyelash extensions today and I love them! They look completely natural and feel amazing!”",
            "source": "Google",
            "link": "https://www.google.ca/search?q=Gratitude+Beauty+-Eyelash+extensions,+Facials,+Permanent+make-up,+3630+Brentwood+Rd+NW+%23232C+Calgary,+AB+T2L+1K8&ludocid=13789624131299997506&gws_rd=cr&dcr=0&ei=4VH_WfK8HcnYjwOb7J2IAQ#gws_rd=cr&lrd=0x53716f0d5888de3b:0xbf5e96163c4a7742,1"
        },
        {
            "review": "“I got eyelash extensions for the first time today. Honestly, I was so relaxed at one point that I fell asleep! My lashes look fantastic. I will definitely be back.”",
            "source": "Facebook",
            "link": "https://www.facebook.com/pg/gratitudebeauty.ca/reviews"
        },
        {
            "review": "“Exceptional, professional service, knowledgable and friendly! Very impressed and will go back again.”",
            "source": "Facebook",
            "link": "https://www.facebook.com/pg/gratitudebeauty.ca/reviews"
        },
        {
            "review": "“I can honestly say there are no better lash technicians out there. I have never left feeling anything but 110% satisfied and beautiful.”",
            "source": "Facebook",
            "link": "https://www.facebook.com/pg/gratitudebeauty.ca/reviews"
        },
        {
            "review": "“Absolutely fantastic experience! Not only were these ladies professional and exceptionally qualified, the spa was beautifully bright, clean and welcoming.”",
            "source": "Facebook",
            "link": "https://www.facebook.com/pg/gratitudebeauty.ca/reviews"
        },
        {
            "review": "“Best place to get your lashes done. Very relaxing, you could fall asleep. Professional and clean. I will never go anywhere else!”",
            "source": "Facebook",
            "link": "https://www.facebook.com/pg/gratitudebeauty.ca/reviews"
        }
    ]
};

// Get random array
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// Get random reviews
function getReviews() {
    // Get JSON of reviews and push to array
    for (var i = 0; i < siteReviews.reviews.length; i++) {
        reviewsArray.push(siteReviews.reviews[i]);
    }
    // Take the array from previous step and pick 1 random review
    if (reviewsArray.length > 0) {
        var reviews = getRandomArrayElements(reviewsArray, 1);
        var array = [];
        for (var i = 0; i < reviews.length; i++) {
            array.push(reviews[i]);
            var review = reviews[i].review;
            var source = reviews[i].source;
            var link = reviews[i].link;
            // console.log(review, source, link);
            document.getElementById('review').innerHTML = review;
            document.getElementById('review-link').innerHTML = source + ' ' + 'Review';
            document.getElementById('review-link').setAttribute('href', link);
        }
    }
}

// Create modal
function createModal() {
    var overlay = document.createElement('div');
    var modal = document.createElement('div');
    var heroBookingButton = document.getElementById('hero-booking');
    var footerBookingButton = document.getElementById('footer-booking');
    if (heroBookingButton || footerBookingButton) {
        heroBookingButton.onclick = function(e) {
            overlay.id = 'overlay';
            modal.id = 'modal';
            modal.className = 'visible';
            modal.innerHTML = '<h1>Choose location</h1> <a style="margin-top:10px;" class="btn gradient" href="https://bookeo.com/gratitudebeauty">Brentwood</a> <a style="margin-top: 10px;" class="btn gradient" href="https://www-1565g.bookeo.com/bookeo/b_gratitudebeauty-second_start.html?ctlsrc=1519583938179&src=02n">Tuxedo Park</a>';
            document.body.appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
        };
        footerBookingButton.onclick = function(e) {
            overlay.id = 'overlay';
            modal.id = 'modal';
            modal.className = 'visible';
            modal.innerHTML = '<h1>Choose location</h1> <a style="margin-top:10px;" class="btn gradient" href="https://bookeo.com/gratitudebeauty">Brentwood</a> <a style="margin-top: 10px;" class="btn gradient" href="https://www-1565g.bookeo.com/bookeo/b_gratitudebeauty-second_start.html?ctlsrc=1519583938179&src=02n">Tuxedo Park</a>';
            document.body.appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
        };
    }
    overlay.onclick = function() {
        this.parentElement.removeChild(overlay);
        this.removeChild(modal);
    };
    modal.onclick = function(event) {
        event.stopPropagation();
    };
}

// Load get reviews
getReviews();
// Initiate modal creation
createModal();

// Load Instafeed
var feed = new Instafeed({get: 'user', userId: '4468612613', clientId: '43615ef3b9134adba22962011a0f205d', accessToken: '4468612613.1677ed0.4d0b7f7f96fa43039a5c88c815e11172', limit: 10, resolution: 'low_resolution', template: '<a class="instagram" href="{{link}}"><img src="{{image}}" alt="{{id}}"/></a>'});
feed.run();
