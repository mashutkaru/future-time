(function () {
  'use strict';

  var PHOTO_DIR = 'photos/';
  /** Bump after replacing photos. Desktop 520×400, mobile 390×340 — wide art fills card (object-fit: cover). */
  var PHOTO_VER = '24';

  function participantPhotoUrlDesktop(key) {
    return PHOTO_DIR + key + '.webp?v=' + PHOTO_VER;
  }
  function participantPhotoUrlMobile(key) {
    return PHOTO_DIR + 'mobile/' + key + '.webp?v=' + PHOTO_VER;
  }
  function participantPictureFront(key, nameEn) {
    return '<picture class="participant-picture">' +
      '<source media="(max-width:900px)" srcset="' + participantPhotoUrlMobile(key) + '"/>' +
      '<img src="' + participantPhotoUrlDesktop(key) + '" alt="' + nameEn + '" loading="lazy" decoding="async"/>' +
      '</picture>';
  }
  function participantPictureBack(key) {
    return '<picture class="participant-picture participant-picture--back">' +
      '<source media="(max-width:900px)" srcset="' + participantPhotoUrlMobile(key) + '"/>' +
      '<img src="' + participantPhotoUrlDesktop(key) + '" alt="" loading="lazy" decoding="async"/>' +
      '</picture>';
  }

  const PARTICIPANTS = [
    { id:1,  key:"Avishay_Cohen",            nameEn:"Avishay Cohen",            nameJa:"コーヘン・アヴィシャイ",             nameHe:"אבישי כהן",            sector:"Central Government", org:"Ministry of Labor",                     orgHe:"משרד העבודה",                     role:"Director, Multi-Generational Employment Dept.", roleHe:"מנהל אגף תעסוקה רב-דורית",            email:"cohan.avishay@gmail.com" },
    { id:2,  key:"Avital_Simcha_Shlezinger", nameEn:"Avital Simcha Shlezinger", nameJa:"シュレジンガー・アヴィタル・シムハ", nameHe:"אביטל שמחה שלזינגר",  sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Head, Senior Citizen & Family Advisory Div.",  roleHe:"מנהלת אגף הייעוץ לאזרח הוותיק",       email:"avitals@nioi.gov.il" },
    { id:4,  key:"Idit_Ayala_Reiss",         nameEn:"Idit Ayala Reiss",         nameJa:"ライス・イディット・アヤラ",         nameHe:"עידית אילה ריס",       sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"Adv., Office of Legal Counsel and Legislative Affairs", roleHe:"עו״ד ייעוץ וחקיקה",                 email:"iditna@justice.gov.il" },
    { id:5,  key:"Jasmin_Vulej",             nameEn:"Jasmin Vulej",             nameJa:"ヴレイ・ジャスミン",               nameHe:"יסמין וולג'י",         sector:"Central Government", org:"The Ministry of Welfare and Social Affairs",            orgHe:"משרד הרווחה",                     role:"Head of Model Development Unit",               roleHe:"מנהלת יחידת פיתוח מודלים",           email:"jasminv@molsa.gov.il" },
    { id:6,  key:"Liat_Stark",               nameEn:"Liat Stark",               nameJa:"スターク・リアット",               nameHe:"ליאת שטרק",            sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"District Director, Guardian General",          roleHe:"מנהלת מחוז ירושלים אפוטרופוס כללי",  email:"liatsta@justice.gov.il" },
    { id:7,  key:"Lior_Zohar",               nameEn:"Lior Zohar",               nameJa:"ゾハル・リオール",                 nameHe:"ליאור זוהר",            sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"Head of Strategy and Pension Consultation Dept.", roleHe:"מנהלת תחום אסטרטגיה וייעוץ פנסיוני", email:"liork@mof.gov.il" },
    { id:8,  key:"Rachela_Akuka",            nameEn:"Rachela Akuka",            nameJa:"アクカ・ラヘラ",                   nameHe:"רחלה אקוקה",            sector:"Central Government", org:"Tax Authority",                        orgHe:"רשות המיסים",                     role:"Head Muster",                                  roleHe:"מנהלת מחלקת שומה",                   email:"akuka720@gmail.com" },
    { id:9,  key:"Ravit_Nakar_El-Ezra",      nameEn:"Ravit Nakar El-Ezra",      nameJa:"ナカル・エルエズラ・ラヴィット",     nameHe:"רוית נקר אל-עזרא",    sector:"Central Government", org:"The Ministry of Welfare and Social Affairs", orgHe:"משרד הרווחה והביטחון החברתי",    role:"Senior Manager, Budgeting and Pricing, Senior Citizens Administration", roleHe:"מנהלת בכירה תקצוב ותמחור אגף אזרחים ותיקים", email:"ravitn@molsa.gov.il" },
    { id:10, key:"Roei_Rafael_Babai",        nameEn:"Roei Rafael Babai",        nameJa:"ババイ・ロエイ・ラファエル",         nameHe:"רועי רפאל בבאי",       sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"National Social Insurance Referent, Budget Dept.", roleHe:"רפרנט ביטוח לאומי, אגף התקציבים", email:"roeib@mof.gov.il" },
    { id:11, key:"Ronit_Rozin",              nameEn:"Ronit Rozin",              nameJa:"ロジン・ロニット",                 nameHe:"רונית רוזין",           sector:"Central Government", org:"Prime Minister Office",                orgHe:"משרד ראש הממשלה",                 role:"CEO Holocaust Survivors Authority",            roleHe:"מנכ״לית הרשות לניצולי שואה",         email:"ronitro@hsa.gov.il" },
    { id:12, key:"Valentina_Batia_Chai",     nameEn:"Valentina Batia Chai",     nameJa:"ハイ・ヴァレンティナ・バティア",     nameHe:"ולנטינה בתיה חי",       sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Branch Manager",                             roleHe:"מנהלת סניף",                           email:"valic1110@gmail.com" },
    { id:13, key:"Yehuda_Arie_Halali",       nameEn:"Yehuda Arie Halali",       nameJa:"ハラリ・イェフダ・アリエ",           nameHe:"יהודה אריה הללי",      sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Senior Citizens Call Center Dept. Manager",    roleHe:"מנהל מחלקת מוקד אזרחים ותיקים",    email:"ci00734@gmail.com" },
    { id:14, key:"Alon_Kalman",              nameEn:"Alon Kalman",              nameJa:"カルマン・アロン",                 nameHe:"אלון קלמן",             sector:"Civil Society",      org:"Gil‑Ad Geriatric Center",              orgHe:"מרכז גריאטרי גיל-עד",             role:"CEO",                                          roleHe:'מנכ"ל',                               email:"alon.k@giladc.co.il" },
    { id:15, key:"Eden_Chen",                nameEn:"Eden Chen",                nameJa:"チェン・エデン",                   nameHe:"עדן חן",                sector:"Civil Society",      org:"Yesodot Letzmicha Dror NGO",           orgHe:"יסודות לתמיכה דרור עמותה",       role:"Director Dror Senior Community Network",       roleHe:"מנהלת רשת קהילות דרור",               email:"eden-c@drorzikna.org.il" },
    { id:16, key:"Josef_Kaplan",             nameEn:"Josef Kaplan",             nameJa:"カプラン・ヨセフ",                 nameHe:"יוסף קפלן",             sector:"Civil Society",      org:"Lev Ganim Senior Living",              orgHe:"לב גנים מגורים לגיל השלישי",     role:"CEO",                                          roleHe:'מנכ"ל',                               email:"kaplan@levganim.co.il" },
    { id:17, key:"Liat_Sikron_Vazan",        nameEn:"Liat Sikron Vazan",        nameJa:"ヴァザン・リアット・シクロン",       nameHe:"ליאת סיקרון וזאן",      sector:"Civil Society",      org:"JDC‑Eshel",                            orgHe:"ג'וינט ישראל – אשל",              role:"Head of Knowledge and Learning Center",        roleHe:"ראש מרכז ידע ולמידה",               email:"liats@jdc.org.il" },
    { id:18, key:"Yael_Barkan_Dolev",        nameEn:"Yael Barkan Dolev",        nameJa:"ドレヴ・ヤエル・バルカン",           nameHe:"יעל ברקן דולב",         sector:"Civil Society",      org:"Gil Oz Organization",                  orgHe:"עמותת גיל עוז",                   role:"CEO",                                          roleHe:"מנכ״לית",                             email:"yael@giloz.co.il" },
    { id:19, key:"Adaya_Nissenholtz",        nameEn:"Adaya Nissenholtz",        nameJa:"ニッセンホルツ・アダヤ",             nameHe:"עדיה ניסנהולץ",        sector:"Healthcare System",      org:"Clalit Health Services",               orgHe:"כללית שירותי בריאות",             role:"Regional Geriatrician",                        roleHe:"גריאטרית מחוזית",                   email:"adayani@clalit.org.il" },
    { id:20, key:"Dalit_Cypel",              nameEn:"Dalit Cypel",              nameJa:"ツィペル・ダリット",               nameHe:"דלית ציפל",            sector:"Healthcare System",      org:"Clalit Health Services",               orgHe:"כללית שירותי בריאות",             role:"Head of Geriatrics Field",                     roleHe:"ראש תחום גריאטריה",                 email:"dalitcy@gmail.com" },
    { id:21, key:"Galit_Segal",              nameEn:"Galit Segal",              nameJa:"セガル・ガリット",                 nameHe:"גלית סגל",              sector:"Healthcare System",      org:"Meuhedet HMO",                        orgHe:"קופת חולים מאוחדת",               role:"Chief Geriatric Physician",                    roleHe:"גריאטרית ראשית",                     email:"galit.s4@meuhedet.co.il" },
    { id:22, key:"Netanel_Levi",             nameEn:"Netanel Levi",             nameJa:"レヴィ・ネタネル",                 nameHe:"נתנאל לוי",             sector:"Healthcare System",      org:"Shoham Medical Center",                orgHe:"המרכז הרפואי שוהם",               role:"Head of Physical Therapy Department",          roleHe:"מנהל שירותי פיזיותרפיה",             email:"netanell@shoham.health.gov.il" },
    { id:23, key:"Suaad_Ektelat",            nameEn:"Suaad Ektelat",            nameJa:"エクテラト・スアード",             nameHe:"סואעד אקטילאת",        sector:"Healthcare System",      org:"Beer Yaakov–Ness Ziona", orgLine2:"Mental Health Center", orgHe:"מרכז לבריאות הנפש באר יעקב-נס ציונה", role:"Adult‑Gerontology Nurse Practitioner",  roleHe:"אחות מומחית גרונטולוגית",          email:"somaa.h84@gmail.com" },
    { id:24, key:"Galit_Groper",             nameEn:"Galit Groper",             nameJa:"グローパー・ガリット",             nameHe:"גלית גרופר",            sector:"Local Government",   org:"Emek Hefer Regional Council",          orgHe:"מועצה אזורית עמק חפר",            role:"Head of Social Services and Health Dept.",     roleHe:"מנהלת אגף רווחה ובריאות",            email:"galitgr@hefer.org.il" },
    { id:25, key:"Michal_Schwartz",          nameEn:"Michal Schwartz",          nameJa:"シュワルツ・ミハル",               nameHe:"מיכל שוורץ",            sector:"Local Government",   org:"Rishon LeZion Municipality",           orgHe:"עיריית ראשון לציון",             role:"Director Senior Citizens Dept.",               roleHe:"מנהלת אגף אזרחים ותיקים",             email:"micalsw@rishonlezion.muni.il" },
    { id:26, key:"Nes-Ya_Strasburg",         nameEn:"Nes-Ya Strasburg",         nameJa:"ストラスブルグ・ネスヤ",           nameHe:"נס-יה שטרסבורג",       sector:"Local Government",   org:"Southern Soreq Cluster",               orgHe:"מרחב שורק דרומי",                 role:"Optimal Aging Regional Director",             roleHe:"מנהלת אזורית להזדקנות מיטבית",      email:"nesyas2222@gmail.com" },
    { id:27, key:"Omer_Ungar",               nameEn:"Omer Ungar",               nameJa:"ウンガル・オメル",                 nameHe:"עומר אונגר",            sector:"Local Government",   org:"Ashdod Municipality",                  orgHe:"עיריית אשדוד",                    role:"Social Services Director",                     roleHe:"מנהל אגף שירותים חברתיים",            email:"omer@ashdod.muni.il" },
    { id:28, key:"Shirli_Reznizky_Kahan",    nameEn:"Shirli Reznizky Kahan",    nameJa:"カハン・シルリ",                   nameHe:"שירלי רזניצקי כהן",    sector:"Academia & Research", org:"Myers JDC Brookdale Institute",        orgHe:"מכון מאיירס-ג'וינט-ברוקדייל",    role:"Senior Research Scholar and Aging Team Leader", roleHe:"חוקרת בכירה וראש צוות הזדקנות",    email:"shirlir@jdc.org" },
    { id:29, key:"Shmuel_Springer",          nameEn:"Shmuel Springer",          nameJa:"スプリンガー・シュムエル",           nameHe:"שמואל שפרינגר",         sector:"Academia & Research", org:"Ariel University",                      orgHe:"אוניברסיטת אריאל",                role:"Head Academic Community Partnership Unit",     roleHe:"ראש יחידת קשרי אקדמיה קהילה",       email:"shmuels@ariel.ac.il" },
    { id:30, key:"Meital_Weissman_Tsabari",  nameEn:"Meital Weissman Tsabari",  nameJa:"メイタル・ワイスマン・ツァバリ",     nameHe:"מיטל ויסמן צברי",     sector:"Central Government",   org:"The Ministry of Welfare and Social Affairs",        orgHe:"משרד הרווחה והשירותים החברתיים",    role:"Head of knowledge management field, policy planning and strategy", roleHe:"מנהלת תחום, אגף תכנון מדיניות",     email:"meitalit80@gmail.com" },
  ];

  const SECTORS = [
    { key:"all",                 label:"All Sectors",        short:"Total",    icon:"👥" },
    { key:"Civil Society",       label:"Civil Society",      short:"Civil Society",    icon:"🤝" },
    { key:"Healthcare System",   label:"Healthcare System",  short:"Healthcare System", icon:"❤️" },
    { key:"Local Government",    label:"Local Government",   short:"Local Government",   icon:"🏢" },
    { key:"Central Government",  label:"Central Government", short:"Central Government", icon:"🏛" },
    { key:"Academia & Research", label:"Academia & Research", short:"Academia & Research", icon:"🎓" },
  ];

  var PRIMARY = '#19258B';
  var ACCENT = { cyan:'#4BC0D9', green:'#7ED321', yellow:'#FFDE40', orange:'#FF6E7B' };
  const SC = {
    "all":                 { bg:"#5b5484", light:"#C0C8D5", border:"#8b92a8", text:"#3d3a5c" },
    "Central Government":  { bg:"#6b6590", light:"#CFCBE1", border:"#8b85a8", text:"#3d3a5c" },
    "Local Government":    { bg:"#8a7572", light:"#DACFCD", border:"#9a9090", text:"#3d3a5c" },
    "Healthcare System":       { bg:"#5783CB", light:"#C0C8D5", border:"#6b9bd4", text:"#3d3a5c" },
    "Civil Society":       { bg:"#5a7a4a", light:"#F0F3DE", border:"#9ba88e", text:"#3d3a5c" },
    "Academia & Research": { bg:"#755EE6", light:"#F3E8FF", border:"#a78bfa", text:"#3d3a5c" },
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

  var SECTOR_ORDER = ["Civil Society","Healthcare System","Local Government","Central Government","Academia & Research"];
  function filterParticipants(activeSector, search) {
    var list = PARTICIPANTS.filter(function (p) {
      const ms = activeSector === "all" || p.sector === activeSector;
      const q = search.toLowerCase();
      const mq = !q || p.nameEn.toLowerCase().indexOf(q) >= 0 || (p.nameJa || '').indexOf(q) >= 0 || p.nameHe.indexOf(q) >= 0 || p.org.toLowerCase().indexOf(q) >= 0 || (p.orgLine2 || '').toLowerCase().indexOf(q) >= 0 || p.role.toLowerCase().indexOf(q) >= 0;
      return ms && mq;
    });
    return list.sort(function (a, b) {
      var ia = SECTOR_ORDER.indexOf(a.sector);
      var ib = SECTOR_ORDER.indexOf(b.sector);
      if (ia !== ib) return ia - ib;
      return a.id - b.id;
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

    // Extra text block above the main "OBJECTIVES & GOALS" section.
    // Populated from the text provided in the PDF at the path you shared.
    var delegationEnHtml =
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">The Future Time Delegation is a multidisciplinary study program designed to explore Japan’s advanced and integrated approach to population aging - one of the most pressing global challenges of the 21st century.</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">As a global leader in longevity and aging innovation, Japan offers a unique ecosystem where healthcare, welfare, community systems, governance, and technology operate in close integration to support healthy, independent, and dignified aging.</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">By examining Japan’s holistic and systemic approach, the delegation seeks to generate actionable insights and strengthen Israel–Japan collaboration in addressing the challenges and opportunities of aging societies.</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>The program is structured around four core pillars:</strong></p>' +
      '<ul style="margin:0 0 16px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">Systemic infrastructure and policy frameworks</li>' +
        '<li style="margin:0 0 6px">Prevention, dependency reduction, and care models</li>' +
        '<li style="margin:0 0 6px">Community and multi-generational living</li>' +
        '<li style="margin:0">Innovation, investment, and technology</li>' +
      '</ul>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">In addition to site visits and professional engagements in Japan, the program will include lectures and presentations from Israeli participants, enabling a two-way exchange of knowledge and experience. This mutual learning framework is designed to foster meaningful dialogue and identify opportunities for collaboration, adaptation, and joint initiatives.</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>The delegation aims to engage with a wide range of institutions across the full continuum of services, including:</strong></p>' +
      '<ul style="margin:0 0 8px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">Public and private healthcare and rehabilitation systems</li>' +
        '<li style="margin:0 0 6px">Municipal and regional governance models</li>' +
        '<li style="margin:0 0 6px">Welfare and community-based services</li>' +
        '<li style="margin:0 0 6px">Multi-generational community centers</li>' +
        '<li style="margin:0 0 6px">Government agencies aand policy frameworks</li>' +
        '<li style="margin:0">Innovation hubs, investment entities, and gerontechnology initiatives</li>' +
      '</ul>';

    var delegationJaHtml =
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本視察団は、21世紀における最も重要なグローバル課題の一つである人口高齢化に対し、日本の先進的かつ統合的なアプローチを探求することを目的とした多分野横断型のスタディプログラムである。</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">高齢化および長寿に関する分野において世界的リーダーである日本は、医療、福祉、地域社会、ガバナンス、テクノロジーが有機的に連携する独自のエコシステムを有しており、健康で自立した尊厳ある高齢期の実現を支えている。</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本視察団は、日本の包括的かつシステム的な取り組みを検証することにより、実践的な知見の創出と、高齢化社会における課題および機会への対応に向けた日イスラエル間の連携強化を目指すものである。</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>本プログラムは、以下の4つの中核テーマに基づいて構成される：</strong></p>' +
      '<ul style="margin:0 0 16px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">制度基盤および政策フレームワーク</li>' +
        '<li style="margin:0 0 6px">予防・自立支援・ケアモデル</li>' +
        '<li style="margin:0 0 6px">地域社会および多世代共生</li>' +
        '<li style="margin:0">イノベーション・投資・テクノロジー</li>' +
      '</ul>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本プログラムでは、日本における視察および専門家との交流に加え、イスラエル側参加者による講義・プレゼンテーションを実施し、双方向の知識および経験の共有を行う。この相互学習の枠組みを通じて、実質的な対話の促進と、協働・適応・共同イニシアティブの創出機会の特定を図る。</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>視察団は、サービス提供の全体像を横断する多様な機関との連携を目指しており、主な訪問先は以下を想定している：</strong></p>' +
      '<ul style="margin:0 0 8px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">医療およびリハビリテーション（公的・民間）</li>' +
        '<li style="margin:0 0 6px">地方自治体および広域行政モデル</li>' +
        '<li style="margin:0 0 6px">福祉サービスおよび地域支援体制</li>' +
        '<li style="margin:0 0 6px">多世代共生型コミュニティセンター</li>' +
        '<li style="margin:0 0 6px">政府機関および政策立案機関</li>' +
        '<li style="margin:0">イノベーション拠点、投資機関、および高齢化関連テクノロジー分野</li>' +
      '</ul>';
    var goalBoxStyle = 'background:rgba(255,255,255,0.1);border-radius:12px;padding:18px 20px;border-left:4px solid #FFD700;margin-bottom:12px';
    var goalsEnHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleEn+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descEn+'</div></div>'; }).join('');
    var goalsJaHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleJa+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descJa+'</div></div>'; }).join('');

    container.innerHTML = '<div style="min-height:100vh;background:#e5e7eb">' +
      '<div class="about-banner" style="background:#2a2d71;width:100%;overflow:hidden">' +
        '<div style="padding:48px 24px;text-align:center"><div style="display:flex;align-items:center;justify-content:center;gap:14px"><img src="images/just_the_round_logo.png" alt="Future Time" style="height:54px;width:auto;display:block" /><h1 style="margin:0;color:white;font-size:32px;font-weight:800;letter-spacing:0.02em">Future Time Program</h1></div></div>' +
      '</div>' +
      '<div class="about-content">' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px">' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">DELEGATION OVERVIEW</div>'+delegationEnHtml+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">視察団概要</div>'+delegationJaHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px">' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">BACKGROUND</div>'+bgEn+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">背景</div>'+bgJa+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15)">' +
          '<div class="about-grid" style="margin-bottom:28px">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">OBJECTIVES &amp; GOALS</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">Program Objective</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">To establish a network of <strong>29 senior leaders</strong> from diverse sectors, working together to promote optimal aging in Israel in the era of 100-year lives.</p></div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">目的及目標</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">プログラムの目的</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">多様な分野で活躍する29名のリーダーによるネットワークを形成し、100年時代におけるイスラエルの最適な高齢化(Optimal Aging)の推進を目指します。</p></div>' +
          '</div>' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:800;font-size:16px;margin-bottom:12px">Program Goals</div>'+goalsEnHtml+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:800;font-size:16px;margin-bottom:12px">プログラムの目標</div>'+goalsJaHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<section class="about-group-image" style="margin-top:36px">' +
          '<div style="background:#2a2d71;border-radius:16px;padding:16px;box-shadow:0 4px 24px rgba(0,0,0,0.12)">' +
            '<img src="'+PHOTO_DIR+'Group_image.jpeg" alt="Future Time group" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:cover" loading="lazy" decoding="async"/>' +
          '</div>' +
        '</section>' +
        '<section class="about-cta" style="margin-top:24px;text-align:center">' +
          '<button id="cta-participants" style="background:#fecf17;color:#2a2d71;border:none;border-radius:14px;padding:16px 40px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 4px 18px rgba(0,0,0,0.2)">👥 Meet the 29 Participants →</button>' +
        '</section>' +
      '</div></div>';

    container.querySelector('#cta-participants').onclick = function () { setPage('participants'); };
  }

  function renderMeetTheTeamPage(container, setPage) {
    var mashaPars = [
      "Masha Robeen is a gerontechnologist and product manager whose work sits at the intersection of aging research, healthcare innovation, and systems integration.",
      "She holds dual Master's degrees in Gerontology from the University of Haifa and Yokohama City University, Japan, and spent five years in Japan researching two interconnected dimensions of long-term care: the coping mechanisms of long-term care recipients, and home and environment adaptations for older adults and their caregivers.",
      "Working alongside major caregiving organizations in both countries, she developed a research-grounded understanding of how policy frameworks, formal care systems, and cultural context shape aging outcomes.",
      "Back in Israel, Masha focuses on improving the transition from hospital to community-based rehabilitation. She collaborates with multidisciplinary healthcare teams to develop integrated models connecting medical care, rehabilitation services, and community support, with a track record of leading healthcare projects from concept to measurable impact.",
      "Masha brings a cross-disciplinary approach to the complex challenges of rapidly aging societies, translating evidence into policy-relevant, human-centered solutions."
    ];
    var hadasPars = [
      "Dr. Hadas Kushelevich is an educator, researcher, and bridge-builder between Israel and Japan. Originally from Israel, she holds a B.A. in Japanese Studies and an M.A. in Political Science from the Hebrew University of Jerusalem. She moved to Japan in 2012 as a recipient of the prestigious MEXT scholarship and has lived there ever since, developing deep familiarity with Japanese society, institutions, and culture.",
      "Dr. Kushelevich earned her Ph.D. from the Graduate School of Law and Politics at Osaka University, where her research focuses on Japanese political institutions and regulatory governance. Her doctoral work examined the regulation of Japan's pharmaceutical market, exploring the intersection of politics, public policy, and organizational reputation.",
      "She teaches at leading universities in Japan and Israel, including Kyoto University, Doshisha University, Ritsumeikan University, and the University of Haifa. Alongside her academic work, she has led numerous cross-cultural initiatives connecting students, researchers, and professionals from different countries.",
      "Living in Japan for over a decade, Hadas engages with the country not only as a scholar but also through everyday life. Fluent in Japanese and deeply immersed in the culture, she continuously explores Japan's institutions, communities, traditions, arts, and landscapes. Her curiosity about the \"Land of the Rising Sun\" fuels her work and shapes the learning experiences she designs for others."
    ];
    var hadasBarzilaiPars = [
      "Hadas Barzilai directs the \"FutureTime\" program at Joint-ELKA, fostering cross-sector collaboration to improve the efficiency and effectiveness of systems and organizations, with the aim of enhancing quality of life for Israeli citizens.",
      "In her previous roles at ELKA, Hadas contributed to developing the Regional Clusters Initiative. She worked closely with the Eastern Negev regional authorities cluster, establishing and leading a forum for local authority heads, a welfare forum, and a multi-sector leadership program. These efforts culminated in a strategic regional economic development plan for the Eastern Negev.",
      "Before joining ELKA, Hadas founded and managed a nonprofit organization dedicated to advancing equality and social justice. Under her leadership, the organization increased public awareness of social rights, provided the tools needed to exercise those rights, and encouraged active civic engagement to influence decision-making processes affecting citizens' quality of life. She led the organization's southern branch for 17 years.",
      "Hadas holds a Master of Social Work (Administration and Welfare Policy track) and a Bachelor of Social Work, both earned cum laude at Ben-Gurion University."
    ];
    var sigalPars = [
      "Sigal Mautner Siebzehner is an organizational consultant and group facilitator with more than 20 years of experience in organizational, personal, and professional development. At ELKA, she has played a key role in designing and managing initiatives led by senior executives and experts from government ministries, local authorities, and civil society organizations.",
      "Previously, Sigal directed the Women's Empowerment Unit at the Israel Association of Community Centers, overseeing leadership programs for thousands of women nationwide. She also served as Director of the \"Youth for Youth\" Association, managed the training department at MATI (Small Business Development Center), and worked as a senior organizational consultant in leading consulting firms.",
      "In these roles, she guided senior management teams, led processes in organizations across multiple sectors, and developed training programs for managers and multi-professional teams. Over the years, Sigal has lectured and facilitated workshops in various academic contexts.",
      "She holds an M.Sc. in Organizational Behavior from Tel Aviv University, is a certified trainer with a certificate in group facilitation from the Zippory Center, and has a certificate in psychotherapy studies from the Temurot School of Dynamic Psychotherapy at Bar-Ilan University."
    ];
    var yuvalPars = [
      "Yuval Golani leads the operations and logistics of the \"FutureTime\" program. In her previous roles at ELKA, she worked with regional municipal clusters to build mechanisms and strengthen capacities for delivering high-quality social services, leading cross-sector collaborations with the Ministry of Health, the Ministry of Interior, and the Ministry of Welfare and Social Services.",
      "Prior to that, Yuval served as Assistant Spokesperson in the Media, Communication and Advocacy Division at the Ministry of Energy and Infrastructure. Alongside her work, she actively volunteers in social organizations working to reduce social inequality.",
      "Yuval holds a BA in Political Science and International Relations from the Hebrew University of Jerusalem."
    ];
    var talPars = [
      "Tal Miles is the Director of National Public System Network Initiatives at JDC Elka, where she leads large-scale collaborations and cross-sector partnerships to strengthen public systems and address complex societal challenges. Working closely with leaders across central and local government, civil society, and professional networks, she designs and implements initiatives that translate collaboration into meaningful, lasting change in the public sector.",
      "Prior to this role, Tal served as CEO of the Israel Green Building Council, where she led national efforts to advance sustainable urban development. Partnering with government decision-makers, municipalities, industry, and civil society, she promoted policies and practices that integrate environmental, social, and economic sustainability. Earlier, she held senior leadership positions at the Council, including VP of Operations and Training.",
      "Beyond her formal roles, Tal is an active community entrepreneur and a dedicated advocate for the inclusion of people with special needs.",
      "Tal holds a BA in Community Coordination from the Open University and Beit Berl College, and an MA in Mediation and Conflict Resolution from Tel Aviv University."
    ];
    var pStyle = 'margin:0 0 16px;font-size:15px;line-height:1.75;color:#475569';
    var mashaBioHtml = mashaPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var hadasBioHtml = hadasPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var hadasBarzilaiBioHtml = hadasBarzilaiPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var sigalBioHtml = sigalPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var yuvalBioHtml = yuvalPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var talBioHtml = talPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var cardStyle = 'background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:560px';
    var newCardStyle = 'background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);width:100%;max-width:360px';
    var photoStyle = 'width:100%;height:280px;object-fit:contain;object-position:center center';
    var sectionTitleStyle = 'margin:0 0 20px;text-align:center;font-size:24px;font-weight:800;color:#1e293b;letter-spacing:0.01em';
    container.innerHTML = '<div style="min-height:100vh;background:#e8ecf8">' +
      '<div class="team-content">' +
        '<h1 style="font-size:36px;font-weight:800;color:#19258B;margin:0 0 48px;text-align:center">Meet the Team</h1>' +
        '<div class="team-section team-section-organizers" style="margin-bottom:44px">' +
          '<h2 style="'+sectionTitleStyle+'">Delegation Organizers</h2>' +
        '<div class="team-cards team-cards-main" style="display:flex;flex-wrap:wrap;justify-content:center;gap:48px">' +
          '<div class="team-card team-card-masha" style="'+cardStyle+'">' +
            '<div class="team-name" style="padding:24px 32px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Masha Robeen</h2></div>' +
            '<div class="team-photo" style="padding:0 24px 24px;background:#fff"><img src="'+PHOTO_DIR+'Masha_Robeen.png" alt="Masha Robeen" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 32px 32px 28px">'+mashaBioHtml+'</div>' +
          '</div>' +
          '<div class="team-card team-card-hadas" style="'+cardStyle+'">' +
            '<div class="team-name" style="padding:24px 32px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Dr. Hadas Kushelevich</h2></div>' +
            '<div class="team-photo" style="padding:0 24px 24px;background:#fff"><img src="'+PHOTO_DIR+'Hadas_Kushelevich.png" alt="Dr. Hadas Kushelevich" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 32px 32px 28px">'+hadasBioHtml+'</div>' +
          '</div>' +
        '</div></div>' +
        '<div class="team-section team-section-program-team">' +
          '<h2 style="'+sectionTitleStyle+'">Future Time Program Team</h2>' +
        '<div class="team-cards team-cards-new" style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px">' +
          '<div class="team-card team-card-hadas-barzilai team-card-new" style="'+newCardStyle+'">' +
            '<div class="team-name" style="padding:24px 24px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Hadas Barzilai</h2></div>' +
            '<div class="team-photo" style="padding:0 20px 20px;background:#fff"><img src="'+PHOTO_DIR+'Hadas_Barzilai.jpg" alt="Hadas Barzilai" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 24px 28px 24px"><p style="'+pStyle+';margin-bottom:8px"><strong>Director, \"FutureTime\" Program</strong><br/>Joint-ELKA</p>'+hadasBarzilaiBioHtml+'</div>' +
          '</div>' +
          '<div class="team-card team-card-sigal team-card-new" style="'+newCardStyle+'">' +
            '<div class="team-name" style="padding:24px 24px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Sigal Mautner Siebzehner</h2></div>' +
            '<div class="team-photo" style="padding:0 20px 20px;background:#fff"><img src="'+PHOTO_DIR+'Sigal_Mautner_Sievzehner.jpeg" alt="Sigal Mautner Siebzehner" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 24px 28px 24px"><p style="'+pStyle+';margin-bottom:8px"><strong>Director, \"FutureTime\" Program</strong><br/>Joint-ELKA</p>'+sigalBioHtml+'</div>' +
          '</div>' +
          '<div class="team-card team-card-yuval team-card-new" style="'+newCardStyle+'">' +
            '<div class="team-name" style="padding:24px 24px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Yuval Golani</h2></div>' +
            '<div class="team-photo" style="padding:0 20px 20px;background:#fff"><img src="'+PHOTO_DIR+'Yuval_Golani.jpeg?v=3" alt="Yuval Golani" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 24px 28px 24px"><p style="'+pStyle+';margin-bottom:8px"><strong>Coordinator, \"FutureTime\" Program</strong><br/>Joint-ELKA</p>'+yuvalBioHtml+'</div>' +
          '</div>' +
          '<div class="team-card team-card-tal team-card-new" style="'+newCardStyle+'">' +
            '<div class="team-name" style="padding:24px 24px 12px"><h2 style="margin:0;font-size:24px;font-weight:800;color:#0f172a">Tal Miles</h2></div>' +
            '<div class="team-photo" style="padding:0 20px 20px;background:#fff"><img src="'+PHOTO_DIR+'Tal_Miles.png" alt="Tal Miles" style="'+photoStyle+';display:block" /></div>' +
            '<div class="team-bio" style="padding:0 24px 28px 24px"><p style="'+pStyle+';margin-bottom:8px"><strong>Director, National Public System Network Initiatives</strong><br/>Joint-ELKA</p>'+talBioHtml+'</div>' +
          '</div>' +
        '</div></div></div></div>';
    var teamCards = container.querySelector('.team-cards-main');
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
    var initial = p.nameEn.charAt(0);
    var nameEn = escapeHtml(p.nameEn);
    var nameJa = escapeHtml(p.nameJa || '');
    var nameHe = escapeHtml(p.nameHe);
    var nameJaHtml = nameJa ? '<div style="font-size:13px;color:'+(c.text||'#475569')+';opacity:0.9">'+nameJa+'</div>' : '';
    var nameJaBackHtml = nameJa ? '<div style="font-size:12px;opacity:0.82">'+nameJa+'</div>' : '';
    var org = escapeHtml(p.org);
    var orgLine2 = (p.orgLine2 && p.orgLine2.trim()) ? '<br/>' + escapeHtml(p.orgLine2) : '';
    var orgHe = escapeHtml(p.orgHe);
    var role = escapeHtml(p.role);
    var roleHe = escapeHtml(p.roleHe);
    var email = escapeHtml(p.email);
    var photoHtml = '<div class="participant-photo-inner" style="width:100%;height:100%;min-height:0;flex:1;display:flex;box-sizing:border-box">' + participantPictureFront(p.key, nameEn) + '</div>';
    var backImg = participantPictureBack(p.key);
    return '<div class="participant-card" data-id="' + p.id + '" style="perspective:900px;cursor:pointer;height:420px;min-height:420px;margin:12px">' +
      '<div class="card-inner" style="position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.55s">' +
        '<div class="card-front" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;background:white;border-radius:14px;border:2.5px solid '+c.border+';overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;box-shadow:0 2px 12px rgba(0,0,0,0.08)">' +
          '<div class="card-photo-wrap" style="flex:3 1 0;min-height:150px;min-width:0;overflow:hidden;display:flex;align-items:stretch;justify-content:stretch">'+photoHtml+'</div>' +
          '<div style="flex:2 1 0;min-height:0;padding:12px 14px 6px;overflow:hidden;background:'+(c.light||c.bg)+';color:'+(c.text||'#334155')+';display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px">' +
            '<div class="card-front-names" style="flex-shrink:0;display:flex;flex-direction:column;gap:6px"><div style="font-weight:800;font-size:16px;color:'+(c.text||'#0f172a')+'">'+nameEn+'</div>'+nameJaHtml+'<div style="font-family:Arial;direction:rtl;font-size:16px;color:'+(c.text||'#475569')+'">'+nameHe+'</div><div class="card-front-org" style="font-size:13px;font-weight:600;color:'+(c.text||'#334155')+';margin-top:4px">'+org+orgLine2+'</div></div>' +
            '<div class="card-front-label-wrap" style="display:flex;align-items:center;justify-content:center;min-height:0;margin-top:2px"><div style="background:'+c.bg+';color:white;font-size:14px;font-weight:700;padding:6px 14px;border-radius:20px">'+escapeHtml(p.sector)+'</div></div>' +
          '</div>' +
          '<div style="flex-shrink:0;text-align:center;padding:8px;font-size:10px;color:white;background:'+c.bg+'">View Details</div>' +
        '</div>' +
        '<div class="card-back" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(160deg,'+c.bg+','+c.bg+'ee);border-radius:14px;padding:18px;color:white;display:flex;flex-direction:column;gap:0;overflow:hidden">' +
          '<div class="card-back-upper" style="flex:1 1 33%;min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:16px 0 20px;gap:12px"><div class="participant-back-thumb" style="width:140px;height:140px;min-width:140px;min-height:140px;border-radius:50%;overflow:hidden;border:3px solid rgba(255,255,255,0.5);flex-shrink:0;background:rgba(255,255,255,0.1);box-shadow:0 4px 12px rgba(0,0,0,0.2)">'+backImg+'</div><div style="text-align:center;display:flex;flex-direction:column;gap:6px"><div style="font-weight:800;font-size:17px">'+nameEn+'</div>'+nameJaBackHtml+'<div style="font-family:Arial;direction:rtl;font-size:13px;opacity:0.88">'+nameHe+'</div></div></div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.25);flex-shrink:0"></div>' +
          '<div style="flex:1;min-height:0;overflow-y:auto;padding:12px 0 8px"><div style="font-size:13px"><strong>'+org+orgLine2+'</strong><br/><span style="font-family:Arial;direction:rtl;font-size:11px;opacity:0.7">'+orgHe+'</span></div>' +
          '<div style="margin-top:8px;font-size:13px"><strong>'+role+'</strong><br/><span style="font-family:Arial;direction:rtl;font-size:11px;opacity:0.7">'+roleHe+'</span></div>' +
          '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:#a5b4fc" onclick="event.stopPropagation()">'+email+'</a></div></div>' +
          '<div style="text-align:center;font-size:10px;opacity:0.5;flex-shrink:0;padding-top:4px">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }

  function renderParticipantsPage(container, activeSector, search, setActiveSector, setSearch) {
    var cnt = counts();
    var filtered = filterParticipants(activeSector, search);

    var statsHtml = SECTORS.map(function(s){
      var c = SC[s.key] || { bg:"#081679", border:"#3d4fcc", light:"#dde1f5", text:"#081679" };
      var isActive = activeSector === s.key;
      return '<button data-sector="'+s.key+'" class="sector-btn" style="flex:1;min-width:0;background:'+(isActive?c.bg:'white')+';border:2px solid '+(isActive?c.border:(c.border||'#cbd5e1'))+';color:'+(isActive?'white':'#3d3a5c')+';border-radius:999px;padding:8px 10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;overflow:visible"><span style="display:flex;align-items:center;gap:4px;flex-shrink:0"><span style="font-size:14px">'+s.icon+'</span><span style="font-weight:900;font-size:14px">'+(cnt[s.key]||0)+'</span></span><span style="font-size:10px;font-weight:600;line-height:1.2;text-align:center;word-break:break-word">'+s.short+'</span></button>';
    }).join('');

    var searchRow = container.querySelector('.search-row');
    var cardsContainer = container.querySelector('#cards-container');
    var isEmpty = container.querySelector('.participants-empty');

    if (!searchRow) {
      container.innerHTML = '<div style="min-height:100vh;background:#e8ecf8">' +
        '<div class="participants-header-wrap" style="background:rgba(36,42,98,0.9);padding:28px 48px 24px;color:white;position:relative">' +
          '<div style="max-width:1204px;margin:0 auto;display:flex;align-items:flex-start;justify-content:flex-start;gap:28px">' +
            '<div style="flex:1;min-width:0;text-align:left;display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:6px 12px 0 0"><h1 style="margin:0;font-size:28px;font-weight:800;display:flex;align-items:center;gap:10px;justify-content:flex-start;line-height:1.1">Program Participants</h1><p style="margin:0;opacity:0.7;font-size:15px;font-weight:800;line-height:1.35;max-width:580px;text-align:left">Choose participants by affiliation label</p><p style="margin:0;opacity:0.7;font-size:15px;font-weight:800;line-height:1.35;max-width:580px;text-align:left">Search and filter all program participants across sectors</p></div>' +
            '<div class="stats-bar-wrap" id="stats-bar" style="flex:0 1 640px;max-width:640px;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;justify-content:flex-end;margin-left:auto">'+statsHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="participants-content">' +
          '<div class="search-row" dir="ltr" style="display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;margin-top:6px;margin-bottom:6px;padding:6px 0"><input type="text" id="search-input" dir="ltr" autocomplete="off" placeholder="Search by name, org, role" style="flex:0 1 420px;min-width:200px;max-width:420px;padding:14px 24px 14px 48px;border:1.5px solid #e2e8f0;border-radius:999px;font-size:14px;font-family:inherit;box-sizing:border-box;background:#f8fafc" /></div>' +
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
      container.querySelector('#stats-bar').outerHTML = '<div class="stats-bar-wrap" id="stats-bar" style="flex:0 1 640px;max-width:640px;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;justify-content:flex-end;margin-left:auto">'+statsHtml+'</div>';
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

  document.querySelector('nav .logo').onclick = function () { setPage('about'); };
  document.querySelector('nav .logo-right').onclick = function () { setPage('about'); };

  setPage('about');
})();
