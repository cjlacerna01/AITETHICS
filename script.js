// ===============================
// WELCOME SCREEN
// ===============================


// ===============================
// SIDEBAR NAVIGATION
// ===============================
 
const navLinks = document.querySelectorAll('aside a');
const sidebar = document.querySelector('aside');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Highlight active link
    document.querySelector('aside a.active')?.classList.remove('active');
    link.classList.add('active');

    // Show selected content
    document.querySelector('.content.active')?.classList.remove('active');
    const sectionId = link.getAttribute('data-section');
    document.getElementById(sectionId).classList.add('active');

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});

// ===============================
// MODAL
// ===============================
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};


// ===============================
// MODAL CONTENT (UPDATED)
// ===============================
const details = {
  general: `
📏 <strong>General Rules and Regulations:</strong>
<p>Wearing of School Uniform: Ang pagsusuot nito ay pangunahing disiplina na nagpapakita ng pagkakaisa at pagmamalaki sa paaralan.</p>
<p>Identification Card (ID): Dapat suot sa loob ng campus at opisyal na aktibidad.</p>
<p>Grooming: Ipinagbabawal ang spikes, kulay na buhok, body piercing, at tattoos.</p>
`,

  other: `
🏫 <strong>Other Rules and Regulations:</strong>
<h3>1. Campus Access/Security</h3>
<ul>
  <li>For security and protection, students should enter the campus upon arrival. Loitering outside the school campus is strictly prohibited.</li>
  <li>Students should show respect to the guard-on-duty and comply with pertinent gate guidelines.</li>
  <li>When the bell rings, students should proceed to their respective classrooms.</li>
</ul>

<h3>2. General Assembly</h3>
<p>General assemblies are convened as may be necessary to discuss matters of concern that need to be disseminated/discussed with the students.</p>

<h3>3. Classroom Decorum and Behavior</h3>
<ul>
  <li>The classroom is a sacrosanct place in the school campus that practically serves as a second home for students.</li>
  <li>Order and cleanliness must be observed by everyone.</li>
  <li>Students must comport themselves with proper decorum and behavior at all times.</li>
  <li>Faculty and school officials must be treated with utmost courtesy and respect.</li>
  <li>Students must occupy assigned seats and participate actively in class lessons.</li>
  <li>Classes must be conducted in relative silence. Conversations restricted to lesson topics.</li>
  <li>Latecomers require teacher consent. Habitual latecomers referred to the Office of the Dean.</li>
  <li>Personal exigencies (bathroom visits) should be done between classes.</li>
  <li>Students should stand when called upon to recite or ask questions.</li>
  <li>Teacher moderates questions and discussions to ensure order.</li>
  <li>Teacher's desk is off-limits. Electronic gadgets on silent mode; misuse may be confiscated.</li>
  <li>Students must keep classrooms clean; class cleaners assigned on rotational basis.</li>
  <li>Class officers, particularly the Class President, should lead by example.</li>
</ul>

<h3>C. Lobbies, Roof Decks, Corridors, Stairways and Other General Use Areas</h3>
<p>Observe silence along corridors, stairways, quadrangle, and general use areas. Keep clean at all times.</p>

<h3>D. Restrooms</h3>
<p>Use restrooms responsibly. Cleanliness must be maintained. Loitering strictly prohibited.</p>

<h3>E. Wearing of Uniform Outside School</h3>
<p>Students are prohibited from going to computer shops, malls, theaters, and similar establishments during class hours.</p>
`,

  bullying: `
🛡️ <strong>Student Protection Program:</strong>
<h3>A. Bullying</h3>
<p>Bullying, which pertains to violence and other similar forms of deviant behavior directed at fellow students constitute grave offenses that require immediate and appropriate action.</p>

<h3>B. Immediate Interventions / Actions</h3>
<ul>
  <li>De-escalate the situation.</li>
  <li>Stop the bullying or violence.</li>
  <li>Separate the students involved.</li>
  <li>Physically separate the parties involved.</li>
  <li>Assess injuries that may require immediate/emergency medical intervention.</li>
  <li>Gather information from witnesses.</li>
</ul>

<h3>C. Reporting</h3>
<p>All incidents of bullying or violence shall immediately be reported to the teacher, guidance counselor, prefect of discipline or any person designated to handle bullying incident.</p>
<p>An Intake Sheet shall be filled up to document the incident.</p>
<p>The designated school official shall inform the parents or guardian of both the victim and the offending student about the incident.</p>
<p>If an incident involves students from another school, the designated school official shall promptly notify the appropriate administrator or school head.</p>
<p>Anonymous reports must be carefully assessed for authenticity and probity. Confidentiality is paramount.</p>

<h3>D. Fact-Finding and Documentation</h3>
<ul>
  <li>Separately interview in private the bully/offending student and the victim.</li>
  <li>Determine threat levels and develop intervention strategies.</li>
  <li>Inform victim and parents of steps to prevent further acts.</li>
  <li>Make recommendations to the Student Protection Committee.</li>
</ul>

<h3>E. Intervention</h3>
<p>The SPC determines appropriate programs for victim, bully, and bystanders. School Head ensures these are provided.</p>

<h3>F. Referral</h3>
<p>The school head or SPC may refer students to trained professionals outside the school, such as social workers or psychologists.</p>

<h3>G. Disciplinary Measures</h3>
<p>Bullying and similar incidents are treated according to nature, gravity, and circumstances.</p>

<h3>H. Offenses and Sanctions</h3>
<p>Interventions and disciplinary measures will follow Section XXIV – Offenses and Sanctions.</p>
`,

  cellphone: `
📱 <strong>Cellphone Policies:</strong>

<p>The use of cellphones, however, poses inherent drawbacks and risks that need to be addressed to ensure that these align with academic objectives and do not serve as distractions.</p>

<p>In this regard, the following policies are prescribed:</p>
<ul>
  <li>The policy on non-use of cellphones during class hours will be strictly implemented.</li>
  <li>As a general rule, and in consonance with the school's program of promoting responsibility, students will be trusted to keep their cellphones and adhere strictly to the non-use policy during class hours.</li>
  <li>Cellphones may only be used during lunch break and morning/afternoon recess. Usage in-between classes is not allowed.</li>
  <li>Use of cellphones during lunch breaks and recess shall be limited to personal calls or texts. Games will not be allowed, particularly during recess, as games inherently require extended time that would unnecessarily delay the start of classes.</li>
</ul>

<p>Breach of rules and regulations will lead to the following:</p>
<ul>
  <li>1st offense - confiscation of cellphone for the duration of the day</li>
  <li>2nd offense - confiscation of cellphone and 1 week ban from bringing the unit to school</li>
  <li>3rd offense - confiscation of cellphone and ban from bringing the unit to school for the rest of the semester</li>
</ul>

<p>In cases of emergency and in meritorious cases, the class adviser or faculty concerned will be given the discretion to allow usage of cellphones.</p>
<p>Class Officers will be empowered to exercise leadership and assist in the implementation of rules and regulations, including the use of cellphones. They may be given extra credits as may be allowed under policy.</p>
<p>The assistance of the Guidance Office/Prefect of Discipline should be solicited whenever necessary.</p>
`,
offenses: `
⚖️ <strong>Offenses & Sanctions:</strong>

<h3>A. Minor Offenses</h3>
<p>Minor offenses refer to violations, transgressions, or infractions of rules and regulations generally characterized by deviant behavior of minimal significance or damage to property, person, or discipline. These include, but are not limited to:</p>
<ul>
  <li>Habitual absences/tardiness</li>
  <li>Rowdy behavior</li>
  <li>Quarreling</li>
  <li>Non-wearing/improper wearing of uniform</li>
  <li>Non-wearing/improper use of school ID</li>
  <li>Use of inappropriate language/swearing</li>
  <li>Improper use of school facilities</li>
  <li>Littering</li>
  <li>Lying</li>
  <li>Minor violations of rules and regulations</li>
  <li>Improper behavior and decorum</li>
  <li>Disrespect of school officials/employees</li>
  <li>Use of foul or indecent language</li>
</ul>
<p>Penalties for minor offenses:</p>
<ul>
  <li>1st Offense: Warning / Parent conference</li>
  <li>2nd Offense: Warning for suspension / Parent conference</li>
  <li>3rd Offense: Suspension</li>
  <li>4th Offense: For Deliberation</li>
</ul>

<h3>B. Less Grave Offenses</h3>
<p>Less grave offenses refer to violations, transgressions, or infractions of rules and regulations generally characterized by deviant behavior of more serious significance or damage to property, person, or discipline. These include, but are not limited to:</p>
<ul>
  <li>Truancy</li>
  <li>Minor intoxication</li>
  <li>Smoking (including use of e-cigarette)</li>
  <li>Academic dishonesty/cheating</li>
  <li>Fighting (with slight physical injuries)</li>
  <li>Verbal/physical assault</li>
  <li>Possession/use of pornographic materials</li>
  <li>Stealing</li>
  <li>Improper language in social media posts/comments</li>
  <li>Dissemination of fake news and malicious rumors/posts</li>
  <li>Vandalism/minor damage or destruction of school property</li>
  <li>Public displays of affection</li>
</ul>
<p>Penalties for less grave offenses:</p>
<ul>
  <li>1st Offense: Warning / Parent conference</li>
  <li>2nd Offense: Suspension (1 to 5 days)</li>
  <li>3rd Offense: For deliberation</li>
</ul>
<p>In addition, offenders may be required to:</p>
<ul>
  <li>Render community service</li>
  <li>Render restitution and shoulder cost of damages</li>
</ul>

<h3>C. Grave Offenses</h3>
<p>Grave offenses are subject to serious disciplinary actions including exclusion, dismissal, and non-readmission. Examples include:</p>
<ul>
  <li>Physical and/or verbal assault or giving destructive feedback to any school authority</li>
  <li>Preventing or threatening students, faculty, or school authorities from discharging duties</li>
  <li>Instigating/leading/participating in concerted activities leading to stoppage of classes</li>
  <li>Participation in hazing, fraternities, or secret societies not sanctioned by the school</li>
  <li>Forging or tampering of school records or forms</li>
  <li>Possession/ownership of deadly weapons</li>
  <li>Immorality / Sexual harassment / Lewd conduct (Violation of RA 7877)</li>
  <li>Stealing / Theft</li>
  <li>Coercion, mulcting, and extortion</li>
  <li>Persistent smoking, gambling, challenging with force, and drunkenness</li>
  <li>Illegal possession, use, or trafficking of prohibited drugs or chemicals (e.g. marijuana, shabu, rugby)</li>
</ul>

<h3>D. Exercise of Management Prerogative</h3>
<p>School officials must exercise fairness and wisdom in the adjudication process. Factors to consider include:</p>
<ul>
  <li>Mitigating or aggravating circumstances</li>
  <li>Family and personal circumstances</li>
  <li>Repeat offenses</li>
  <li>Presence and degree of remorse</li>
  <li>Class performance</li>
  <li>Conduct/behavior</li>
  <li>Damage and threat assessment</li>
</ul>
<p>Management exercises discretion in determining the gravity of offenses and prescribing appropriate penalties.</p>
`,
actions: `
📝 <strong>Types of Disciplinary Action:</strong>
<ul>
  <li><strong>Warning / Verbal Reprimand:</strong> Used for first-time offenses; the student is placed on probation for a specified period.</li>
  <li><strong>Suspension:</strong> The school denies a student attendance for a period not exceeding 20% of the prescribed class days for the term.</li>
  <li><strong>Non-Readmission:</strong> A student considered undesirable may be refused admission for the next school year.</li>
  <li><strong>Dismissal:</strong> For repeated grave breaches; involves a parent-administrator-adviser meeting and summary dismissal by the Disciplinary Committee.</li>
  <li><strong>Exclusion:</strong> The student is dropped from the school roll and transfer credentials are issued immediately.</li>
  <li><strong>Expulsion:</strong> An extreme penalty that may result in non-admission to any public or private school in the Philippines.</li>
  <li><strong>Probation:</strong> A measure for consistent misbehavior or a single grave breach, intended to help the student improve future conduct.</li>
</ul>
`,
};


document.querySelectorAll(".more").forEach(btn => {
  btn.onclick = () => {
    const key = btn.dataset.info;
    modalText.innerHTML = details[key] || "";
    modal.style.display = "flex";
  };
});

// ===============================
// LOGIN + LOADING
// ===============================
const enterBtn = document.getElementById("enterHandbook");
const passwordInput = document.getElementById("passwordInput");
const loadingScreen = document.getElementById("loadingScreen");

function handleLogin() {
  const defaultPassword = "AITE2026";
  const errorMessage = document.getElementById("errorMessage");

  if (passwordInput.value !== defaultPassword) {
    errorMessage.textContent = "Incorrect Password. Please try again.";
    return;
  }

  errorMessage.textContent = "";

  // LOCK SCROLL
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");

  // SHOW LOADING
  loadingScreen.style.display = "block";
  document.body.classList.add("blur-active");

  setTimeout(() => {
    // HIDE LOADING
    loadingScreen.style.display = "none";
    document.body.classList.remove("blur-active");

    // HIDE WELCOME
    const welcome = document.getElementById("welcomeOverlay");
    welcome.style.display = "none";

    // ENABLE SCROLL AFTER LOGIN
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");

  }, 2200);
}

enterBtn.onclick = handleLogin;

passwordInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleLogin();
  }
});

// ===============================
// SCROLL ANIMATIONS
// ===============================
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

const animateElements = document.querySelectorAll(
  ".content h2, .content h3, .content p, .content li, .conduct-card"
);

animateElements.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});

// ===============================
// HOME DEFAULT
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("active");
  document.querySelector('[data-section="home"]').classList.add("active");
  placeholder.style.display = "none";
});

// ===============================
// CLOCK
// ===============================
function updateClock() {
  document.getElementById("clock").innerText = new Date().toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// ===============================
// QUOTES
// ===============================
const quotes = [
  "Discipline is the bridge between goals and accomplishment.",
  "Excellence is not a skill. It is an attitude.",
  "Innovation begins with curiosity.",
  "Great leaders build great communities."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerText = quotes[random];
}

// ===============================
// SEARCH (POLICIES FIXED)
// ===============================

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
