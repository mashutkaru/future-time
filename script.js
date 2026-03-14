(function () {
  'use strict';

  var PHOTO_DIR = 'photos/';

  const PARTICIPANTS = [
    { id:1,  key:"Avishay_Cohen",            nameEn:"Avishay Cohen",            nameHe:"אבישי כהן",            sector:"Central Government", org:"Ministry of Labor",                     orgHe:"משרד העבודה",                     role:"Director, Multi-Generational Employment Dept.", roleHe:"מנהל אגף תעסוקה רב-דורית",            email:"cohan.avishay@gmail.com" },
    { id:2,  key:"Avital_Simcha_Shlezinger", nameEn:"Avital Simcha Shlezinger", nameHe:"אביטל שמחה שלזינגר",  sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Head, Senior Citizen & Family Advisory Div.",  roleHe:"מנהלת אגף הייעוץ לאזרח הוותיק",       email:"avitals@nioi.gov.il" },
    { id:3,  key:"Gal_Gez_Nave",             nameEn:"Gal Gez Nave",             nameHe:"גלי גז נווה",          sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Manager of Social Services",                   roleHe:"מנהלת השירות הסוציאלי",               email:"galigez@nioi.gov.il" },
    { id:4,  key:"Idit_Ayala_Reiss",         nameEn:"Idit Ayala Reiss",         nameHe:"עידית אילה ריס",       sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"Senior Legal Advisor",                         roleHe:"יועצת משפטית בכירה",                  email:"idit.reiss@justice.gov.il" },
    { id:5,  key:"Jasmin_Vulej",             nameEn:"Jasmin Vulej",             nameHe:"יסמין וולג'י",         sector:"Central Government", org:"Ministry of Welfare & Social Security", orgHe:"משרד הרווחה והביטחון החברתי",    role:"Deputy Director General",                      roleHe:'סגנית מנכ"ל',                          email:"jasmin.vulej@molsa.gov.il" },
    { id:6,  key:"Liat_Stark",               nameEn:"Liat Stark",               nameHe:"ליאת שטרק",            sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"Director, Elder Rights Division",              roleHe:"מנהלת אגף זכויות קשישים",             email:"liat.stark@justice.gov.il" },
    { id:7,  key:"Dalit_Cypel",              nameEn:"Dalit Cypel",              nameHe:"דלית ציפל",            sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"Head of Long-Term Care Budget",                roleHe:"ראשת תקציב טיפול ארוך טווח",          email:"dalit.cypel@mof.gov.il" },
    { id:8,  key:"Adaya_Nissenholtz",        nameEn:"Adaya Nissenholtz",        nameHe:"עדיה ניסנהולץ",        sector:"Central Government", org:"Prime Minister's Office",              orgHe:"משרד ראש הממשלה",                 role:"Strategic Advisor, Society Division",          roleHe:"יועצת אסטרטגית, אגף חברה",           email:"adaya.nissenholtz@pmo.gov.il" },
    { id:9,  key:"Ravit_Nakar_El-Ezra",      nameEn:"Ravit Nakar El-Ezra",      nameHe:"רבית נקר אל-עזרא",    sector:"Central Government", org:"Ministry of Health",                   orgHe:"משרד הבריאות",                    role:"Director, Geriatric Services",                 roleHe:"מנהלת שירותים גריאטריים",             email:"ravit.nakar@moh.gov.il" },
    { id:10, key:"Ronit_Rozin",              nameEn:"Ronit Rozin",              nameHe:"רונית רוזין",           sector:"Central Government", org:"Ministry for Social Equality",         orgHe:"המשרד לשוויון חברתי",             role:"Head of Senior Citizens Department",           roleHe:"ראשת אגף אזרחים ותיקים",             email:"ronit.rozin@equality.gov.il" },
    { id:11, key:"Shirli_Reznizky_Kahan",    nameEn:"Shirli Reznizky Kahan",    nameHe:"שירלי רזניצקי כהן",    sector:"Central Government", org:"Ministry of Health",                   orgHe:"משרד הבריאות",                    role:"National Coordinator, Dementia Policy",        roleHe:"רכזת לאומית, מדיניות דמנציה",         email:"shirli.kahan@moh.gov.il" },
    { id:12, key:"Omer_Ungar",               nameEn:"Omer Ungar",               nameHe:"עומר אונגר",            sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Research & Policy Advisor",                    roleHe:"יועץ מחקר ומדיניות",                  email:"omer.ungar@nioi.gov.il" },
    { id:13, key:"Yael_Barkan_Dolev",        nameEn:"Yael Barkan Dolev",        nameHe:"יעל ברקן דולב",         sector:"Central Government", org:"Ministry of Labor",                     orgHe:"משרד העבודה",                     role:"Senior Policy Officer",                        roleHe:"קצינת מדיניות בכירה",                 email:"yael.barkan@labor.gov.il" },
    { id:14, key:"Suaad_Ektelat",            nameEn:"Suaad Ektelat",            nameHe:"סועאד אקטלת",           sector:"Central Government", org:"Prime Minister's Office",              orgHe:"משרד ראש הממשלה",                 role:"Director, Atudot LeIsrael Division",           roleHe:"מנהלת חטיבת עתודות לישראל",          email:"suaad.ektelat@pmo.gov.il" },
    { id:15, key:"Eden_Chen",                nameEn:"Eden Chen",                nameHe:"עדן חן",                sector:"Local Government",   org:"Tel Aviv-Yafo Municipality",           orgHe:"עיריית תל אביב-יפו",              role:"Director of Social Services",                  roleHe:"מנהלת שירותים חברתיים",               email:"eden.chen@tel-aviv.gov.il" },
    { id:16, key:"Lior_Zohar",               nameEn:"Lior Zohar",               nameHe:"ליאור זוהר",            sector:"Local Government",   org:"Haifa Municipality",                   orgHe:"עיריית חיפה",                     role:"Head of Elderly Services",                     roleHe:"ראש שירות קשישים",                    email:"lior.zohar@haifa.gov.il" },
    { id:17, key:"Rachela_Akuka",            nameEn:"Rachela Akuka",            nameHe:"רחלה אקוקה",            sector:"Local Government",   org:"Jerusalem Municipality",               orgHe:"עיריית ירושלים",                  role:"Community Welfare Director",                   roleHe:"מנהלת רווחה קהילתית",                 email:"rachela.akuka@jerusalem.gov.il" },
    { id:18, key:"Shmuel_Springer",          nameEn:"Shmuel Springer",          nameHe:"שמואל שפרינגר",         sector:"Local Government",   org:"Beer Sheva Municipality",              orgHe:"עיריית באר שבע",                  role:"VP Social Services",                           roleHe:"סגן נשיא שירותים חברתיים",            email:"shmuel.springer@beersheva.gov.il" },
    { id:19, key:"Galit_Segal",              nameEn:"Galit Segal",              nameHe:"גלית סגל",              sector:"Health System",      org:"Clalit Health Services",               orgHe:"כללית שירותי בריאות",             role:"Head of Geriatric Care",                       roleHe:"ראשת טיפול גריאטרי",                  email:"galit.segal@clalit.org.il" },
    { id:20, key:"Netanel_Levi",             nameEn:"Netanel Levi",             nameHe:"נתנאל לוי",             sector:"Health System",      org:"Sheba Medical Center",                 orgHe:"המרכז הרפואי שיבא",               role:"Director, Institute of Aging",                 roleHe:"מנהל מכון ההזדקנות",                  email:"netanel.levi@sheba.org.il" },
    { id:21, key:"Meital_Weissman_Tsabari",  nameEn:"Meital Weissman Tsabari",  nameHe:"מיטל וייסמן צברי",     sector:"Health System",      org:"Maccabi Healthcare",                   orgHe:"מכבי שירותי בריאות",              role:"National Senior Care Coordinator",             roleHe:"רכזת טיפול ארצי לקשישים",             email:"meital.weissman@maccabi.co.il" },
    { id:22, key:"Roei_Rafael_Babai",        nameEn:"Roei Rafael Babai",        nameHe:"ראי רפאל בבאי",         sector:"Health System",      org:"Meuhedet Health Fund",                 orgHe:"קופת חולים מאוחדת",               role:"Deputy Medical Director",                      roleHe:"סגן מנהל רפואי",                      email:"roei.babai@meuhedet.co.il" },
    { id:23, key:"Michal_Schwartz",          nameEn:"Michal Schwartz",          nameHe:"מיכל שוורץ",            sector:"Health System",      org:"Leumit Health Services",               orgHe:"לאומית שירותי בריאות",            role:"Head of Community Nursing",                    roleHe:"ראשת סיעוד קהילתי",                   email:"michal.schwartz@leumit.co.il" },
    { id:24, key:"Galit_Groper",             nameEn:"Galit Groper",             nameHe:"גלית גרופר",            sector:"Health System",      org:"Hadassah Medical Center",              orgHe:"המרכז הרפואי הדסה",               role:"Director, Geriatric Rehabilitation",           roleHe:"מנהלת שיקום גריאטרי",                 email:"galit.groper@hadassah.org.il" },
    { id:25, key:"Valentina_Batia_Chai",     nameEn:"Valentina Batia Chai",     nameHe:"ולנטינה בתיה חי",       sector:"Civil Society",      org:"JDC Israel – Eshel",                   orgHe:"ג'וינט ישראל – אשל",              role:"Senior Program Director",                      roleHe:"מנהלת תוכנית בכירה",                  email:"valentina.chai@jdc.org" },
    { id:26, key:"Nes-Ya_Strasburg",         nameEn:"Nes-Ya Strasburg",         nameHe:"נס-יה שטרסבורג",       sector:"Civil Society",      org:"JDC Israel – Elka",                    orgHe:'ג\'וינט ישראל – אלכ"א',           role:"Director of Innovation",                       roleHe:"מנהלת חדשנות",                        email:"nesya.strasburg@jdc.org" },
    { id:27, key:"Yehuda_Arie_Halali",       nameEn:"Yehuda Arie Halali",       nameHe:"יהודה אריה הלל",        sector:"Civil Society",      org:"Myers-JDC-Brookdale Institute",        orgHe:"מכון מאיירס-ג'וינט-ברוקדייל",    role:"Research Director",                            roleHe:"מנהל מחקר",                           email:"yehuda.halali@jdc.org" },
    { id:28, key:"Josef_Kaplan",             nameEn:"Josef Kaplan",             nameHe:"יוסף קפלן",             sector:"Civil Society",      org:"Ageing Well Foundation",               orgHe:"קרן הזדקנות טובה",                role:"CEO",                                          roleHe:'מנכ"ל',                               email:"josef.kaplan@ageingwell.org.il" },
    { id:29, key:"Alon_Kalman",              nameEn:"Alon Kalman",              nameHe:"אלון קלמן",             sector:"Academia & Research", org:"The Hebrew University",                 orgHe:"האוניברסיטה העברית",              role:"Head, Gerontology Research Center",            roleHe:"ראש מרכז מחקר גרונטולוגיה",           email:"alon.kalman@huji.ac.il" },
    { id:30, key:"Liat_Sikron_Vazan",        nameEn:"Liat Sikron Vazan",        nameHe:"ליאת סיקרון וזאן",      sector:"Academia & Research", org:"Ben-Gurion University",                 orgHe:"אוניברסיטת בן-גוריון",            role:"Senior Lecturer, Public Health & Aging",       roleHe:"מרצה בכירה, בריאות הציבור והזדקנות",  email:"liat.sikron@bgu.ac.il" },
  ];

  const SECTORS = [
    { key:"all",                 label:"All Sectors",        short:"Total",    icon:"👥" },
    { key:"Central Government",  label:"Central Government", short:"Central Government", icon:"🏛" },
    { key:"Local Government",    label:"Local Government",   short:"Local Government",   icon:"🏢" },
    { key:"Health System",       label:"Health System",      short:"Health",   icon:"❤️" },
    { key:"Civil Society",       label:"Civil Society",      short:"Civil",    icon:"🤝" },
    { key:"Academia & Research", label:"Academia & Research", short:"Academia", icon:"🎓" },
  ];

  var PRIMARY = '#19258B';
  var ACCENT = { cyan:'#4BC0D9', green:'#7ED321', yellow:'#FFDE40', orange:'#FF6E7B' };
  const SC = {
    "Central Government":  { bg:PRIMARY, light:"#dde5f8", border:"#3d52c4", text:PRIMARY },
    "Local Government":    { bg:"#14532d", light:"#dcfce7", border:"#16a34a", text:"#14532d" },
    "Health System":       { bg:"#9f1239", light:"#ffe4e6", border:"#f43f5e", text:"#9f1239" },
    "Civil Society":       { bg:"#92400e", light:"#fef3c7", border:"#f59e0b", text:"#92400e" },
    "Academia & Research": { bg:"#581c87", light:"#f3e8ff", border:"#a855f7", text:"#581c87" },
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function counts() {
    const c = { all: PARTICIPANTS.length };
    PARTICIPANTS.forEach(function (p) { c[p.sector] = (c[p.sector] || 0) + 1; });
    return c;
  }

  function filterParticipants(activeSector, search) {
    return PARTICIPANTS.filter(function (p) {
      const ms = activeSector === "all" || p.sector === activeSector;
      const q = search.toLowerCase();
      const mq = !q || p.nameEn.toLowerCase().indexOf(q) >= 0 || p.nameHe.indexOf(q) >= 0 || p.org.toLowerCase().indexOf(q) >= 0 || p.role.toLowerCase().indexOf(q) >= 0;
      return ms && mq;
    });
  }

  function renderAboutPage(container, setPage) {
    var partners = ["Prime Minister's Office","Ministry of Welfare & Social Security","Ministry of Health","Ministry for Social Equality","Ministry of Finance","National Insurance Institute","Local Government Bodies","JDC Israel – Eshel","JDC Israel – Elka"];
    var goals = [
      { icon:"💬", titleEn:"Shared Ecosystem Language", titleJa:"共通言語の構築", descEn:"Develop a common professional language across the aging ecosystem.", descJa:"高齢化エコシステムにおける専門用語を確立します。" },
      { icon:"🔭", titleEn:"Shared Future Vision", titleJa:"未来ビジョンの共有", descEn:"Build a collective vision for the future of aging in Israel.", descJa:"高齢化分野における共通の未来像を描きます。" },
      { icon:"🤝", titleEn:"Cross-Sector Collaboration", titleJa:"分野横断の連携", descEn:"Strengthen collaboration between organizations and systems.", descJa:"組織間および制度間の協働を促進します。" },
      { icon:"🚀", titleEn:"Joint Initiatives", titleJa:"共同プロジェクトの推進", descEn:"Develop and lead collaborative initiatives that advance optimal aging in Israel.", descJa:"最適な高齢化を実現するための共同イニシアティブを開発・推進します。" },
    ];

    var bgEn = '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">Preparing for an era in which people may live 100 years is one of the strategic challenges facing the State of Israel in the coming decades. It carries significant implications and opportunities across many fields and constitutes a true national mission.</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">Optimal preparation requires synergistic collaboration between systems and between people who share a common language, professional perspective, and a shared vision for the future. To address this need, <strong>&quot;Future Time&quot; (Zman Atid)</strong> was developed — a multi-system leadership program that brings together leaders who seek to drive change, think together, and act collaboratively around core challenges related to optimal aging, alongside organizational challenges concerning how systems operate and function.</p><p style="margin:0;font-size:14px;line-height:1.85;color:white"><strong>&quot;Future Time&quot;</strong> is part of the national program <strong>&quot;Atudot LeIsrael&quot; (Reserves for Israel)</strong>, a strategic initiative designed to build human capital reserves for Israel\'s public service sector. The program is the result of a collaboration between the Prime Minister\'s Office (Government and Society Division and the Atudot LeIsrael Division), the Ministry of Welfare and Social Security, the Ministry of Health, the Ministry for Social Equality, the Ministry of Finance, the National Insurance Institute, local government, and JDC Israel (Eshel and Elka).</p>';
    var bgJa = '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">100年時代への備えは、今後数十年においてイスラエルが直面する最も重要な戦略的課題の一つである。この課題は、さまざまな分野において大きな意義と機会をもたらし、国家的使命として取り組むべきテーマである。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">この課題に効果的に対応するためには、制度や組織、そして人々の間での分野横断的な連携が不可欠である。共通の言語、専門的な視点、そして未来に対する共有されたビジョンを持つリーダーたちによる協働が求められている。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">そのために開発されたのが<strong>「זמן עתיד(Zman Atid / Future Time)」</strong>である。本プログラムは、制度や組織を横断したリーダーシッププログラムであり、変化を生み出すリーダーたちを結びつけ、最適な高齢化(Optimal Aging)に関する主要課題や制度・組織の運営に関わる課題について共に考え、協働して行動することを目的とする。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本プログラムは、イスラエルの公共サービス分野における人的資本の育成を目的とする国家戦略プログラムの一環として実施されている。</p><p style="margin:0;font-size:14px;line-height:1.85;color:white">この取り組みは、首相府(政府・社会局および 国家戦略プログラム部門)、社会福祉・社会保障省、保健省、社会的平等省、財務省、国民保険機構、地方自治体、および JDCイスラエル(Eshel・Elka) の協力により推進されている。</p>';
    var goalBoxStyle = 'background:rgba(255,255,255,0.1);border-radius:12px;padding:18px 20px;border-left:4px solid #FFD700;margin-bottom:12px';
    var goalsEnHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleEn+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descEn+'</div></div>'; }).join('');
    var goalsJaHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleJa+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descJa+'</div></div>'; }).join('');

    container.innerHTML = '<div style="min-height:100vh;background:#e5e7eb">' +
      '<div style="width:100%;overflow:hidden"><img src="banner.png" alt="Future Time - Leading Optimal Aging in Israel" style="width:100%;height:auto;display:block;vertical-align:top" /></div>' +
      '<div class="about-content">' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px">' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">BACKGROUND</div>'+bgEn+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">背景</div>'+bgJa+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15)">' +
          '<div class="about-grid" style="margin-bottom:28px">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">OBJECTIVES &amp; GOALS</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">Program Objective</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">To establish a network of <strong>30 senior leaders</strong> from diverse sectors, working together to promote optimal aging in Israel in the era of 100-year lives.</p></div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">目的及目標</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">プログラムの目的</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">多様な分野で活躍する30名のリーダーによるネットワークを形成し、100年時代におけるイスラエルの最適な高齢化(Optimal Aging)の推進を目指します。</p></div>' +
          '</div>' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:800;font-size:16px;margin-bottom:12px">Program Goals</div>'+goalsEnHtml+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:800;font-size:16px;margin-bottom:12px">プログラムの目標</div>'+goalsJaHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<section class="about-cta" style="margin-top:40px;text-align:center">' +
          '<button id="cta-participants" style="background:#fecf17;color:#2a2d71;border:none;border-radius:14px;padding:16px 40px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 4px 18px rgba(0,0,0,0.2)">👥 Meet the 30 Participants →</button>' +
        '</section>' +
      '</div></div>';

    container.querySelector('#cta-participants').onclick = function () { setPage('participants'); };
  }

  function renderMeetTheTeamPage(container, setPage) {
    var mashaPars = [
      "Masha Robeen holds two Master's degrees in Gerontology, one from Israel and one from Japan. She spent five years living in Japan, where she deepened her understanding of aging societies and developed a strong connection to Japanese culture and social systems. As a Japanologist, she brings a comparative perspective on how different societies approach longevity, community, and care.",
      "Her professional focus centers on healthcare innovation and rehabilitation, particularly on improving the transition from hospital rehabilitation to community life. She collaborates with multidisciplinary healthcare teams to develop models that integrate medical care, rehabilitation services, and community support, with the goal of improving recovery outcomes and quality of life for patients.",
      "Masha is especially interested in the challenges and opportunities created by rapidly aging societies. Drawing on both her academic background in gerontology and her experience with healthcare systems, she explores how policies, technologies, and service design can better support independence, dignity, and well-being in later life."
    ];
    var hadasPars = [
      "Dr. Hadas Kushelevich is an educator, researcher, and bridge-builder between Israel and Japan. Originally from Israel, she holds a B.A. in Japanese Studies and an M.A. in Political Science from the Hebrew University of Jerusalem. She moved to Japan in 2012 as a recipient of the prestigious MEXT scholarship and has lived there ever since, developing deep familiarity with Japanese society, institutions, and culture.",
      "Dr. Kushelevich earned her Ph.D. from the Graduate School of Law and Politics at Osaka University, where her research focuses on Japanese political institutions and regulatory governance. Her doctoral work examined the regulation of Japan's pharmaceutical market, exploring the intersection of politics, public policy, and organizational reputation.",
      "She teaches at leading universities in Japan and Israel, including Kyoto University, Doshisha University, Ritsumeikan University, and the University of Haifa. Alongside her academic work, she has led numerous cross-cultural initiatives connecting students, researchers, and professionals from different countries.",
      "Living in Japan for over a decade, Hadas engages with the country not only as a scholar but also through everyday life. Fluent in Japanese and deeply immersed in the culture, she continuously explores Japan's institutions, communities, traditions, arts, and landscapes. Her curiosity about the \"Land of the Rising Sun\" fuels her work and shapes the learning experiences she designs for others."
    ];
    var pStyle = 'margin:0 0 16px;font-size:15px;line-height:1.75;color:#475569';
    var mashaBioHtml = mashaPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var hadasBioHtml = hadasPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var cardStyle = 'background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:560px';
    var photoStyle = 'width:100%;height:280px;object-fit:contain;object-position:center center';
    container.innerHTML = '<div style="min-height:100vh;background:#e8ecf8">' +
      '<div class="team-content">' +
        '<h1 style="font-size:36px;font-weight:800;color:#19258B;margin:0 0 48px;text-align:center">Meet the Team</h1>' +
        '<div class="team-cards" style="display:flex;flex-wrap:wrap;justify-content:center;gap:48px">' +
          '<div class="team-card team-card-masha" style="'+cardStyle+'">' +
            '<div class="team-photo" style="padding:24px 24px 32px;background:#f1f5f9"><img src="'+PHOTO_DIR+'Masha_Robeen.png" alt="Masha Robeen" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:32px 32px 28px">' +
              '<h2 style="margin:0 0 16px;font-size:24px;font-weight:800;color:#0f172a">Masha Robeen</h2>' +
              mashaBioHtml +
            '</div></div>' +
          '<div class="team-card team-card-hadas" style="'+cardStyle+'">' +
            '<div class="team-photo" style="padding:24px 24px 32px;background:#f1f5f9"><img src="'+PHOTO_DIR+'Hadas_Kushelevich.png" alt="Dr. Hadas Kushelevich" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:32px 32px 28px">' +
              '<h2 style="margin:0 0 16px;font-size:24px;font-weight:800;color:#0f172a">Dr. Hadas Kushelevich</h2>' +
              hadasBioHtml +
            '</div></div>' +
        '</div></div></div>';
    var teamCards = container.querySelector('.team-cards');
    var mashaCard = container.querySelector('.team-card-masha');
    var hadasCard = container.querySelector('.team-card-hadas');
    if (teamCards && mashaCard && hadasCard && hadasCard.previousElementSibling !== mashaCard) {
      teamCards.insertBefore(mashaCard, hadasCard);
    }
  }

  function sectorBadge(sector) {
    var c = SC[sector] || { light:"#f1f5f9", text:"#475569", border:"#cbd5e1" };
    return '<span style="background:'+c.light+';color:'+c.text+';border:1.5px solid '+c.border+';font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">'+escapeHtml(sector)+'</span>';
  }
  function renderParticipantCard(p) {
    var c = SC[p.sector] || { bg:"#334155", border:"#64748b", light:"#f1f5f9" };
    var img = PHOTO_DIR + p.key + '.png';
    var photoStyle = 'object-fit:cover;object-position:center center;';
    var hasPhotoPadding = (p.key === 'Roei_Rafael_Babai' || p.key === 'Avital_Simcha_Shlezinger');
    var needsPhotoMargin = (p.key === 'Ravit_Nakar_El-Ezra' || p.key === 'Adaya_Nissenholtz' || p.key === 'Lior_Zohar');
    var initial = p.nameEn.charAt(0);
    var nameEn = escapeHtml(p.nameEn);
    var nameHe = escapeHtml(p.nameHe);
    var org = escapeHtml(p.org);
    var orgHe = escapeHtml(p.orgHe);
    var role = escapeHtml(p.role);
    var roleHe = escapeHtml(p.roleHe);
    var email = escapeHtml(p.email);
    var photoImgStyle = photoStyle;
    if (hasPhotoPadding) photoImgStyle = 'object-fit:contain;object-position:center center;';
    var photoHtml = img
      ? (hasPhotoPadding ? '<div style="width:100%;height:100%;padding:4px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:white;border:1px solid #bfdbfe;border-radius:8px"><img src="'+img+'" alt="'+nameEn+'" style="width:100%;height:100%;'+photoImgStyle+'" /></div>' : (needsPhotoMargin ? '<div style="width:100%;height:100%;padding:12px 0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:#f8fafc"><img src="'+img+'" alt="'+nameEn+'" style="width:100%;height:100%;'+photoStyle+'" /></div>' : '<img src="'+img+'" alt="'+nameEn+'" style="width:100%;height:100%;'+photoStyle+'" />'))
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:white;font-size:72px;font-weight:800;background:'+c.bg+'">'+initial+'</div>';
    return '<div class="participant-card" data-id="' + p.id + '" style="perspective:900px;cursor:pointer;height:420px;min-height:420px;margin:12px">' +
      '<div class="card-inner" style="position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.55s">' +
        '<div class="card-front" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;background:white;border-radius:14px;border:2.5px solid '+c.border+';overflow:hidden;display:flex;flex-direction:column;box-shadow:0 2px 12px rgba(0,0,0,0.08)">' +
          '<div class="card-photo-wrap" style="width:100%;height:200px;min-height:200px;overflow:hidden;background:#f8fafc;display:flex;align-items:center;justify-content:center">'+photoHtml+'</div>' +
          '<div style="flex:1;padding:18px 16px 14px;min-height:0;background:'+(c.light||c.bg)+';color:'+(c.text||'#334155')+';display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px">' +
            '<div style="flex-shrink:0;display:flex;flex-direction:column;gap:8px"><div style="font-weight:800;font-size:16px;color:'+(c.text||'#0f172a')+'">'+nameEn+'</div><div style="font-family:Arial;direction:rtl;font-size:16px;color:'+(c.text||'#475569')+'">'+nameHe+'</div><div style="font-size:13px;font-weight:600;color:'+(c.text||'#334155')+'">'+org+'</div></div>' +
            '<div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:0"><div style="background:'+c.bg+';color:white;font-size:14px;font-weight:700;padding:6px 14px;border-radius:20px">'+escapeHtml(p.sector)+'</div></div>' +
          '</div>' +
          '<div style="text-align:center;padding:8px;font-size:10px;color:white;background:'+c.bg+'">TAP FOR DETAILS</div>' +
        '</div>' +
        '<div class="card-back" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(160deg,'+c.bg+','+c.bg+'ee);border-radius:14px;padding:18px;color:white;display:flex;flex-direction:column;gap:10px">' +
          '<div style="display:flex;gap:12px;align-items:center"><div style="width:60px;height:60px;border-radius:6px;overflow:hidden;border:2px solid rgba(255,255,255,0.35);flex-shrink:0;background:rgba(255,255,255,0.1)">'+(img?'<img src="'+img+'" alt="" style="width:100%;height:100%;'+photoStyle+'" />':'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800">'+initial+'</div>')+'</div><div><div style="font-weight:800;font-size:16px">'+nameEn+'</div><div style="font-family:Arial;direction:rtl;font-size:12px;opacity:0.75">'+nameHe+'</div></div></div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.2)"></div>' +
          '<div style="flex:1;min-height:0"><div style="font-size:13.5px"><strong>'+org+'</strong><br/><span style="font-family:Arial;direction:rtl;font-size:11px;opacity:0.65">'+orgHe+'</span></div>' +
          '<div style="margin-top:8px;font-size:13.5px"><strong>'+role+'</strong><br/><span style="font-family:Arial;direction:rtl;font-size:11px;opacity:0.65">'+roleHe+'</span></div>' +
          '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:#a5b4fc" onclick="event.stopPropagation()">'+email+'</a></div></div>' +
          '<div style="text-align:center;font-size:10px;opacity:0.4">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }

  function renderParticipantsPage(container, activeSector, search, setActiveSector, setSearch) {
    var cnt = counts();
    var filtered = filterParticipants(activeSector, search);

    var statsHtml = SECTORS.map(function(s){
      var c = SC[s.key] || { bg:"#081679", border:"#3d4fcc", light:"#dde1f5", text:"#081679" };
      var isActive = activeSector === s.key;
      return '<button data-sector="'+s.key+'" class="sector-btn" style="flex:1;min-width:0;background:'+(isActive?c.bg:(c.light||'white'))+';border:2px solid '+(isActive?c.border:(c.border||'#cbd5e1'))+';color:'+(isActive?'white':(c.text||'#475569'))+';border-radius:999px;padding:8px 10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;overflow:visible"><span style="display:flex;align-items:center;gap:4px;flex-shrink:0"><span style="font-size:14px">'+s.icon+'</span><span style="font-weight:900;font-size:14px">'+(cnt[s.key]||0)+'</span></span><span style="font-size:10px;font-weight:600;line-height:1.2;text-align:center;word-break:break-word">'+s.short+'</span></button>';
    }).join('');

    var searchRow = container.querySelector('.search-row');
    var cardsContainer = container.querySelector('#cards-container');
    var isEmpty = container.querySelector('.participants-empty');

    if (!searchRow) {
      container.innerHTML = '<div style="min-height:100vh;background:#e8ecf8">' +
        '<div class="participants-header-wrap" style="background:#19258B;padding:28px 48px 48px;color:white;position:relative">' +
          '<div style="max-width:1300px;margin:0 auto;display:flex;align-items:center;gap:12">' +
            '<div><h1 style="margin:0;font-size:28px;font-weight:800;display:flex;align-items:center;gap:18px">Participants Directory <span style="font-size:28px">👥</span></h1><p style="margin:0;opacity:0.7;font-size:15px;margin-top:3px">Browse and search all 30 program participants across sectors</p></div>' +
          '</div>' +
          '<div class="stats-bar-wrap" id="stats-bar" style="position:absolute;left:50%;transform:translateX(-50%);bottom:-30px;width:100%;max-width:1100px;padding:0 24px;box-sizing:border-box;z-index:10">'+statsHtml+'</div>' +
        '</div>' +
        '<div class="participants-content">' +
          '<div class="search-row" dir="ltr" style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:12px;margin-bottom:12px;padding:8px 0"><input type="text" id="search-input" dir="ltr" autocomplete="off" placeholder="Search by name, org, role" style="flex:1;min-width:200px;max-width:420px;padding:14px 24px 14px 48px;border:1.5px solid #e2e8f0;border-radius:999px;font-size:14px;font-family:inherit;box-sizing:border-box;background:#f8fafc" /><span id="search-count" style="font-size:14px;color:#64748b;font-weight:600">'+filtered.length+' participant'+(filtered.length!==1?'s':'')+'</span></div>' +
          '<div class="cards-grid" style="margin-top:4px;padding:4px 0" id="cards-container">' +
            filtered.map(renderParticipantCard).join('') +
          '</div>' +
          '<div class="participants-empty" style="display:none;text-align:center;padding:60px;color:#94a3b8"><div style="font-size:44px;margin-bottom:12px">🔍</div><div style="font-size:17px;font-weight:700">No participants found</div></div>' +
        '</div></div>';

      var input = container.querySelector('#search-input');
      input.value = search;
      input.oninput = function () { setSearch(this.value); };

      container.querySelectorAll('[data-sector]').forEach(function(btn){
        btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
      });
    } else {
      container.querySelector('#stats-bar').outerHTML = '<div class="stats-bar-wrap" id="stats-bar" style="position:absolute;left:50%;transform:translateX(-50%);bottom:-30px;width:100%;max-width:1100px;padding:0 24px;box-sizing:border-box;z-index:10">'+statsHtml+'</div>';
      container.querySelector('#search-count').textContent = filtered.length + ' participant' + (filtered.length !== 1 ? 's' : '');
      cardsContainer = container.querySelector('#cards-container');
      cardsContainer.innerHTML = filtered.map(renderParticipantCard).join('');
      isEmpty = container.querySelector('.participants-empty');
      isEmpty.style.display = filtered.length === 0 ? 'block' : 'none';
    }

    container.querySelectorAll('[data-sector]').forEach(function(btn){
      btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
    });

    container.querySelectorAll('.participant-card').forEach(function(el){
      el.onclick = function () {
        var inner = el.querySelector('.card-inner');
        inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      };
    });
  }

  var state = { page: 'about', activeSector: 'all', search: '' };

  function setPage(page) {
    state.page = page;
    document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-page')===page); });
    document.getElementById('about-page').classList.toggle('active', page==='about');
    document.getElementById('participants-page').classList.toggle('active', page==='participants');
    document.getElementById('team-page').classList.toggle('active', page==='team');
    if (page === 'about') renderAboutPage(document.getElementById('about-page'), setPage);
    else if (page === 'participants') renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    else if (page === 'team') renderMeetTheTeamPage(document.getElementById('team-page'), setPage);
  }

  function setActiveSector(s) {
    state.activeSector = s;
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
  }

  function setSearch(s) {
    state.search = s;
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
  }

  document.querySelectorAll('.nav-btn').forEach(function(btn){
    btn.onclick = function () { setPage(btn.getAttribute('data-page')); };
  });

  setPage('about');
})();
