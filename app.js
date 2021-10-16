const menue = document.querySelector('.hum_btn');
const MenueLinks = document.querySelector('.desctop_nav_wrapper');
menue.addEventListener('click', () => {
  menue.classList.toggle('a');
  MenueLinks.classList.toggle('active');
});

// feature section

const output = document.querySelector('.feature_section');
output.innerHTML = `${output.innerHTML}<div class="secondPage_title">
<h3 class="secondPage_text" id="feature_text">Curriculum Features</h3>
<span class="underline"></span>
</div>
<div class="feature_wrapper" id="feature_mobile">
<div class="feature_div">
    <div class="dotted_wrapper">
        <div class="background_wrapper" id="wrapper-seven"></div>
        <div class="dotted_background"></div>
    </div>
    <div class="feature-txt_wrapper">
        <h1 class="feature_title">Learn at your Convenience</h1>
        <p class="feature_main-one">learn at your best convenience from home or at a place of your work.</p>
        <div class="feature_underline"></div>
        <p class="feature_main-two">Get a full experience of a classroom from wherever you are.</p>
    </div>
</div>
<div class="feature_div">
    <div class="dotted_wrapper">
        <div class="background_wrapper" id="wrapper-eight"></div>
        <div class="dotted_background"></div>
    </div>
    <div class="feature-txt_wrapper">
        <h1 class="feature_title">Meet new People</h1>
        <p class="feature_main-one">Meet new people who reside from all over the world and get a diversified knowledge about different cultures.</p>
        <div class="feature_underline"></div>
        <p class="feature_main-two">>Build your resume by working and learning with people from all kinds of cultures and religions.</p>
    </div>
</div>
<button class="feature_more">MORE<i class="fas fa-chevron-down"></i></button>
</div>
<div class="feature_desktop_wrapper">
<div class="feature_wrapper">
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Learn at Home</h1>
            <p class="feature_main-one">learn at your best convenience from home or at a place of your work.</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">Get a full experience of a classroom from wherever you are.</p>
        </div>
    </div>
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper" id="wrapper-two"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Meet new People</h1>
            <p class="feature_main-one">Meet new people who reside from all over the world and get a diversified knowledge about different cultures.</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">Build your resume by working and learning with people from all kinds of cultures and religions.</p>
        </div>
    </div>
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper" id="wrapper-three"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Get full time Support</h1>
            <p class="feature_main-one">get full-time support from our skilled technical and non-technical staff members.</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">get access to our support team 24/7.</p>
        </div>
    </div>
</div>
<div class="feature_wrapper">
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper" id="wrapper-four"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Collaborate</h1>
            <p class="feature_main-one">Work and learn in collaboration with students from all over the world.</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">get collaboration experience with people from different cultures.</p>
        </div>
    </div>
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper" id="wrapper-five"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Work as an Intern</h1>
            <p class="feature_main-one">Work as an intern in well-known technological companies from all over the world!</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">Get the best experience of your life as a developer by working with companies like Facebook and Google..</p>
        </div>
    </div>
    <div class="feature_div">
        <div class="dotted_wrapper">
            <div class="background_wrapper" id="wrapper-six"></div>
            <div class="dotted_background"></div>
        </div>
        <div class="feature-txt_wrapper">
            <h1 class="feature_title">Graduate</h1>
            <p class="feature_main-one">Graduate with a well-accepted and respected certificate in software development.</p>
            <div class="feature_underline"></div>
            <p class="feature_main-two">As you are well equipped with the necessary knowledge you need to become a software developer go out and start looking for your dream job.</p>
        </div>
    </div>
</div>
</div>
<div class="feature_footer">
<div class="secondPage_title" id="secondPage_title-footer">
    <h3 class="secondPage_text" id="partner_txt">Partners</h3>
    <span class="underline"></span>
</div>
<div class="footer_pictures">
    <i class="fab fa-pinterest-p"></i>
    <i class="fab fa-google-pay"></i>
    <i class="fab fa-linkedin-in"></i>
</div>
</div>
<div class="feature_footer_main">
<div class="logo" id="footer-logo"></div>
<div class="footer_txt_wrapper">
    <p class="text-one">Class of fall 2021 is on the way!</p>
    <p class="text-two"> We highly respect and thank all our big and small collaborators.</p>
</div>
</div>`;
