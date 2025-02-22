import { escapeLatex } from '../utils';

export type Sb2novResumeData = {
  heading: {
    name: string;
    phone?: string;
    email?: string;
    portfolio?: string;
    github?: string;
    linkedin?: string;
    leetcode?: string;
    codeforces?: string;
    location?: string;
  };
  education: {
    institution: string;
    location: string;
    degree: string;
    duration: {
      from: string;
      to: string;
    };
    cgpa?: string;
    percentage?: string;
  }[];
  skills: Record<string, string[]>;
  experience: {
    title: string;
    date: string;
    accomplishments: string[];
  }[];
  projects: {
    title: string;
    url: string;
    urlLabel: string;
    accomplishments: string[];
  }[];
  honorsAndAwards: {
    description: string;
    url?: string;
    urlLabel?: string;
  }[];
};

export const sb2novResumeSampleData: Sb2novResumeData = {
  heading: {
    name: 'John Doe',
    phone: '+1 (123) 456 7890',
    email: 'jhonny@sins.com',
    portfolio: 'https://johndoe.com',
    github: 'github.com/shubhamku044/la-resume',
    linkedin: 'linkedin.com/in/johndoe',
    leetcode: 'leetcode.com/johndoe',
    codeforces: 'codeforces.com/johndoe',
    location: 'Sonagachi, Kolkata, India',
  },
  education: [
    {
      institution: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA, USA',
      degree: 'Bachelor of Science in Computer Science',
      duration: {
        from: 'Sep. 2018',
        to: 'May 2022',
      },
      cgpa: '3.8/4.0',
    },
    {
      institution: 'Central High School',
      location: 'Springfield, IL, USA',
      degree: 'High School Diploma',
      duration: {
        from: 'Aug. 2014',
        to: 'May 2018',
      },
      percentage: '92.5',
    },
    {
      institution: 'Stanford University',
      location: 'Stanford, CA, USA',
      degree: 'Master of Science in Artificial Intelligence',
      duration: {
        from: 'Sep. 2022',
        to: 'June 2024',
      },
      cgpa: '3.9/4.0',
    },
  ],
  skills: {
    'Programming skills': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'],
    'databases': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
    'frameworks': ['React', 'Node.js', 'Express.js', 'Django', 'Spring Boot'],
    'developerTools': ['Git', 'Docker', 'Webpack', 'VS Code', 'Jenkins'],
  },
  experience: [
    {
      title: 'SCALE AI (Outlier) - C++ AI Trainer (Freelance)',
      date: 'Oct 2024',
      accomplishments: [
        'Conducted A/B testing on 50+ AI model responses, optimizing performance using C++.',
        'Created 10+ complex prompts to improve model training and achieve higher accuracy.',
        'Evaluated over 200 AI responses for accuracy, relevance, and quality across predefined categories.',
        'Provided targeted feedback that led to improvement in AI decision-making and output quality.',
      ],
    },
    {
      title: 'Pyccel',
      date: 'Jan 2024',
      accomplishments: [
        'Added support for \\texttt{numpy.max} and \\texttt{numpy.min} in the C printer, including macro definitions, AST updates, and Fortran support for complex numbers.',
        'Resolved issue \\#1645 by replacing deprecated AST classes with \\texttt{Constant} (Python 3.8+), ensuring compatibility with newer Python versions.',
      ],
    },
    {
      title: 'TechCorp - Software Engineer Intern',
      date: 'May 2023 -- Aug 2023',
      accomplishments: [
        'Developed a RESTful API using Node.js, reducing server response time by 30%.',
        'Collaborated with a team of 5 to implement CI/CD pipelines using Jenkins and Docker.',
        'Optimized database queries in PostgreSQL, improving data retrieval speed by 25%.',
      ],
    },
  ],
  projects: [
    {
      title: 'Personal Portfolio',
      url: 'https://johndoe.com',
      urlLabel: 'Link',
      accomplishments: [
        'Developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS to showcase projects and skills.',
        'Designed a clean UI, improving load time by 20%.',
        'Deployed on Vercel, achieving 99% uptime.',
      ],
    },
    {
      title: 'E-Commerce Platform',
      url: 'https://github.com/johndoe/ecommerce',
      urlLabel: 'Github Link',
      accomplishments: [
        'Built a full-stack app with React and Node.js, increasing user engagement by 30%.',
        'Integrated Stripe, processing 1000+ transactions with 99% success rate.',
        'Optimized backend, reducing API latency by 25%.',
      ],
    },
  ],
  honorsAndAwards: [
    {
      description: 'Achieved a 2123 rating (Knight) and ranked in the top 1.5% of LeetCode users',
      url: 'https://leetcode.com/johndoe',
      urlLabel: 'Profile',
    },
    {
      description: 'Solved 2000+ DSA problems across all platforms',
    },
    {
      description:
        'Selected for Amazon Machine Learning Summer School 2024 among top 5% of applicants',
      url: 'https://aws.amazon.com/education/ml-summer-school',
      urlLabel: 'Certificate',
    },
    {
      description: 'Qualified for Round 2 in Meta Hacker Cup 2024, placing in top 10%',
      url: 'https://www.facebook.com/codingcompetitions/hacker-cup/2024',
    },
    {
      description: 'Won regional coding competition, beating 95% of participants',
    },
  ],
};

export const sb2nov = (data: Sb2novResumeData) => {
  const contactItems: string[] = [];
  if (data.heading.phone) contactItems.push(escapeLatex(data.heading.phone));
  if (data.heading.email)
    contactItems.push(
      `\\href{mailto:${escapeLatex(data.heading.email)}}{\\textbf{${escapeLatex(data.heading.email)}}}`
    );
  if (data.heading.portfolio)
    contactItems.push(`\\href{${escapeLatex(data.heading.portfolio)}}{\\textbf{Portfolio}}`);
  if (data.heading.github)
    contactItems.push(`\\href{${escapeLatex(data.heading.github)}}{\\textbf{Github}}`);
  if (data.heading.linkedin)
    contactItems.push(`\\href{${escapeLatex(data.heading.linkedin)}}{\\textbf{LinkedIn}}`);
  if (data.heading.leetcode)
    contactItems.push(`\\href{${escapeLatex(data.heading.leetcode)}}{\\textbf{LeetCode}}`);
  if (data.heading.codeforces)
    contactItems.push(`\\href{${escapeLatex(data.heading.codeforces)}}{\\textbf{Codeforces}}`);

  const contactLine = contactItems.length > 0 ? `\\small ${contactItems.join(' $|$ ')}` : '';
  return `
\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-5pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-10pt} % Adjust the value as needed
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-1pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}

%----------HEADING----------
\\begin{center}
        \\textbf{\\Huge \\scshape ${escapeLatex(data.heading.name)}} \\\\
        \\vspace{1pt}
        ${contactLine ? `${contactLine} \\\\` : ''}
        ${data.heading.location ? `\\small ${escapeLatex(data.heading.location)}` : ''}
    }}
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
${data.education
  .map(({ institution, location, degree, duration, ...others }) => {
    return `
    \\resumeSubheading
      {${institution}}{${location}}
      {${degree}; ${others.cgpa ? `CGPA: ${others.cgpa}` : `Percentage: ${others.percentage}\\%`}}{${duration.from} -- ${duration.to}}
`;
  })
  .join('')}
  \\resumeSubHeadingListEnd

%-----------SKILLS-----------
\\section{Technical Skills}
\\resumeSubHeadingListStart
    \\resumeItemListStart
${Object.entries(data.skills)
  .map(([category, items]) => {
    return `\\resumeItem{\\textbf{${category.charAt(0).toUpperCase() + category.slice(1)}}: ${items.join(', ')}}`;
  })
  .join('\n        ')}
    \\resumeItemListEnd
\\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Experience}
${data.experience
  .map(
    ({ title, date, accomplishments }) => `
\\resumeSubHeadingListStart
    \\resumeProjectHeading
    {\\textbf{${title}}}{${date}}
    \\resumeItemListStart
        ${accomplishments?.map((item) => `\\resumeItem{${escapeLatex(item)}}`).join('\n        ')}
    \\resumeItemListEnd
\\resumeSubHeadingListEnd
`
  )
  .join('\n')}

%-----------PROJECTS-----------
\\section{Projects}
${data.projects
  .map(
    ({ title, url, urlLabel, accomplishments }) => `
\\resumeSubHeadingListStart
    \\resumeProjectHeading
        {\\textbf{${escapeLatex(title)}}}{\\href{${escapeLatex(url)}}{${escapeLatex(urlLabel)}}}
    \\resumeItemListStart
        ${accomplishments.map((item) => `\\resumeItem{${escapeLatex(item)}}`).join('\n        ')}
    \\resumeItemListEnd
\\resumeSubHeadingListEnd
`
  )
  .join('\n')}

%-----------HONORS & AWARDS-----------
\\section{Honors & Awards}
\\resumeSubHeadingListStart
${data.honorsAndAwards
  .map(({ description, url, urlLabel }) => {
    const escapedDescription = escapeLatex(description);
    const urlText = url
      ? `\\hfill \\href{${escapeLatex(url)}}{\\underline{${escapeLatex(urlLabel || 'Link')}}}`
      : '';
    return `\\resumeItem{${escapedDescription}${urlText}}`;
  })
  .join('\n    ')}
\\resumeSubHeadingListEnd

\\end{document}
`;
};
