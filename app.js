
const menue = document.querySelector('.hum_btn');
const MenueLinks = document.querySelector('.desctop_nav_wrapper');
menue.addEventListener('click', () => {
  menue.classList.toggle('a');
  MenueLinks.classList.toggle('active');
});

const data = [{
  name: 'Learn at Home',
  descriptionOne: 'learn at your best convenience from home or at a place of your work.',
  descriptionTwo: 'Get a full experience of a classroom from wherever you are.',
  imageId: 'wrapper-two',
},
{
  name: 'Meet new People',
  descriptionOne: 'Meet new people who reside from all over the world and get a diversified knowledge about different cultures.',
  descriptionTwo: 'Build your resume by working and learning with people from all kinds of cultures and religions.',
  imageId: 'wrapper-three',
},
{
  name: 'Get full time Support',
  descriptionOne: 'get full-time support from our skilled technical and non-technical staff members.',
  descriptionTwo: 'get access to our support team 24/7.',
  imageId: 'wrapper-four',
},
{
  name: 'Collaborate',
  descriptionOne: 'Work and learn in collaboration with students from all over the world.',
  descriptionTwo: 'get collaboration experience with people from different cultures.',
  imageId: 'wrapper-six',
},
{
  name: 'Work as an Intern',
  descriptionOne: 'Work as an intern in well-known technological companies from all over the world!',
  descriptionTwo: 'Get the best experience of your life as a developer by working with companies like Facebook and Google.',
  imageId: 'wrapper-seven',
},
{
  name: 'Graduate',
  descriptionOne: 'Graduate with a well-accepted and respected certificate in software development.',
  descriptionTwo: 'As you are well equipped with the necessary knowledge you need to become a software developer go out and start looking for your dream job.',
  imageId: 'wrapper-eight',
}];

const mobilePart = document.getElementById('feature_mobile');
for (let x = 0; x < 2; x += 1) {
  const featureDiv = document.createElement('div');
  featureDiv.className = 'feature_div';
  const backgroundWrapper = document.createElement('div');
  backgroundWrapper.className = 'background_wrapper';
  backgroundWrapper.id = data[x].imageId;

  const dottedWrapper = document.createElement('div');
  dottedWrapper.className = 'dotted_wrapper';

  const dottedBackground = document.createElement('div');
  dottedBackground.className = 'dotted_background';

  dottedWrapper.appendChild(backgroundWrapper);
  dottedWrapper.appendChild(dottedBackground);

  // feature Text wrapper

  const featureTxtWrapper = document.createElement('div');
  featureTxtWrapper.className = 'feature-txt_wrapper';

  const featureTitle = document.createElement('h1');
  featureTitle.innerHTML = data[x].name;
  featureTitle.className = 'feature_title';

  const featureMainOne = document.createElement('p');
  featureMainOne.innerHTML = data[x].descriptionOne;
  featureMainOne.className = 'feature_main-one';

  const featureUnderline = document.createElement('div');
  featureUnderline.className = 'feature_underline';

  const featureMainTwo = document.createElement('p');
  featureMainTwo.innerHTML = data[x].descriptionTwo;
  featureMainTwo.className = 'feature_main-two';

  featureTxtWrapper.appendChild(featureTitle);
  featureTxtWrapper.appendChild(featureMainOne);
  featureTxtWrapper.appendChild(featureUnderline);
  featureTxtWrapper.appendChild(featureMainTwo);

  featureDiv.appendChild(dottedWrapper);
  featureDiv.appendChild(featureTxtWrapper);
  mobilePart.appendChild(featureDiv);
}

const button = document.createElement('button');
button.className = 'feature_more';

const icon = document.createElement('i');
icon.className = 'fas fa-chevron-down';
button.innerHTML = 'MORE';

button.appendChild(icon);
mobilePart.appendChild(button);

const leftPart = document.getElementById('feature_left');
for (let x = 0; x < 3; x += 1) {
  const featureDiv = document.createElement('div');
  featureDiv.className = 'feature_div';
  const backgroundWrapper = document.createElement('div');
  backgroundWrapper.className = 'background_wrapper';
  backgroundWrapper.id = data[x].imageId;

  const dottedWrapper = document.createElement('div');
  dottedWrapper.className = 'dotted_wrapper';

  const dottedBackground = document.createElement('div');
  dottedBackground.className = 'dotted_background';

  dottedWrapper.appendChild(backgroundWrapper);
  dottedWrapper.appendChild(dottedBackground);

  // feature Text wrapper

  const featureTxtWrapper = document.createElement('div');
  featureTxtWrapper.className = 'feature-txt_wrapper';

  const featureTitle = document.createElement('h1');
  featureTitle.innerHTML = data[x].name;
  featureTitle.className = 'feature_title';

  const featureMainOne = document.createElement('p');
  featureMainOne.innerHTML = data[x].descriptionOne;
  featureMainOne.className = 'feature_main-one';

  const featureUnderline = document.createElement('div');
  featureUnderline.className = 'feature_underline';

  const featureMainTwo = document.createElement('p');
  featureMainTwo.innerHTML = data[x].descriptionTwo;
  featureMainTwo.className = 'feature_main-two';

  featureTxtWrapper.appendChild(featureTitle);
  featureTxtWrapper.appendChild(featureMainOne);
  featureTxtWrapper.appendChild(featureUnderline);
  featureTxtWrapper.appendChild(featureMainTwo);

  featureDiv.appendChild(dottedWrapper);
  featureDiv.appendChild(featureTxtWrapper);
  leftPart.appendChild(featureDiv);
}

const rightPart = document.getElementById('feature_right');
for (let x = 3; x < 7; x += 1) {
  const featureDiv = document.createElement('div');
  featureDiv.className = 'feature_div';
  const backgroundWrapper = document.createElement('div');
  backgroundWrapper.className = 'background_wrapper';
  backgroundWrapper.id = data[x].imageId;

  const dottedWrapper = document.createElement('div');
  dottedWrapper.className = 'dotted_wrapper';

  const dottedBackground = document.createElement('div');
  dottedBackground.className = 'dotted_background';

  dottedWrapper.appendChild(backgroundWrapper);
  dottedWrapper.appendChild(dottedBackground);

  // feature Text wrapper

  const featureTxtWrapper = document.createElement('div');
  featureTxtWrapper.className = 'feature-txt_wrapper';

  const featureTitle = document.createElement('h1');
  featureTitle.innerHTML = data[x].name;
  featureTitle.className = 'feature_title';

  const featureMainOne = document.createElement('p');
  featureMainOne.innerHTML = data[x].descriptionOne;
  featureMainOne.className = 'feature_main-one';

  const featureUnderline = document.createElement('div');
  featureUnderline.className = 'feature_underline';

  const featureMainTwo = document.createElement('p');
  featureMainTwo.innerHTML = data[x].descriptionTwo;
  featureMainTwo.className = 'feature_main-two';
  

  featureTxtWrapper.appendChild(featureTitle);
  featureTxtWrapper.appendChild(featureMainOne);
  featureTxtWrapper.appendChild(featureUnderline);
  featureTxtWrapper.appendChild(featureMainTwo);

  featureDiv.appendChild(dottedWrapper);
  featureDiv.appendChild(featureTxtWrapper);
  rightPart.appendChild(featureDiv);
  console.log(rightPart);
}
