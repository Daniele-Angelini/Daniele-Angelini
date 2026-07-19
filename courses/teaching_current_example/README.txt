CURRENT TEACHING 2026/2027

1. Replace teaching.html at the repository root.

2. For every current course:
   - duplicate the folder courses/course-template-26-27/
   - rename it using lowercase words and hyphens
   - replace COURSE TITLE, COURSE-FOLDER, INSTITUTION,
     DEGREE PROGRAMME, COURSE ROLE and EMAIL-ADDRESS
   - add one course-card inside Current teaching in teaching.html

Example:

<a
    class="course-card"
    href="courses/mathematics-for-finance-26-27/"
>
    <span class="course-card-main">
        <strong>Mathematics for Finance</strong>
        <span>University · Degree programme</span>
    </span>

    <span class="course-card-arrow" aria-hidden="true">→</span>
</a>

Recommended folders inside each course:

materials/
├── lectures/
├── exercises/
├── exams/
└── other/
