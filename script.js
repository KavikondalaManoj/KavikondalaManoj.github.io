/* ==========================================================
   TRANSLATIONS
   Drafted for professional tone in EN/JA/DE. Recommend a native
   review of the Japanese and German copy before treating it as final,
   especially for domain-specific automotive/validation terminology.
   ========================================================== */
const translations = {
  en: {
    nav_about:"About", nav_expertise:"Expertise", nav_experience:"Experience", nav_projects:"Projects",
    nav_certifications:"Certifications", nav_contact:"Contact", nav_resume:"Résumé",
    hero_eyebrow:"HONDA R&D JAPAN — CONNECTED VEHICLE PLATFORMS",
    hero_role:"Senior Technical Lead", hero_role_sub:"Automotive Embedded Validation Leader",
    hero_summary:"Twelve-plus years signing off software quality on vehicles that update themselves — leading OTA and HIL validation programs across global OEM and Tier-1 platforms, from Tokyo to Munich.",
    hero_stat1_label:"Years in Validation", hero_stat2_label:"OTA Cycles / Day", hero_stat3_label:"Manual Effort Cut", hero_stat4_label:"Report Turnaround",
    hero_cta_resume:"Download Résumé", hero_cta_contact:"Get in Touch", hero_scroll:"Scroll",
    about_eyebrow:"MY APPROACH", about_title:"About",
    about_p1:"Based in Japan and supporting Honda R&D, I lead OTA and SOTA/FOTA validation programs, commission HIL test benches on dSPACE Scalexio, and write the Python automation that turns thousands of raw test cycles into decisions engineers can act on.",
    about_p2:"Along the way I've validated braking and chassis control, HVAC ECUs, exterior lighting, power tailgates, and EPS systems for OEMs including BMW, Ford, Opel, and Bentley — always with one question in mind: what happens if this fails on the road, and how do we prove in advance that it won't.",
    expertise_title:"Core Expertise",
    exp1_title:"OTA & SOTA/FOTA Validation", exp1_desc:"End-to-end sign-off of software and firmware updates delivered over the air, including rollback, interruption, and fleet-scale regression scenarios.",
    exp2_title:"HIL Commissioning", exp2_desc:"Building and commissioning Hardware-in-the-Loop rigs on dSPACE Scalexio for braking, chassis, and body-control validation.",
    exp3_title:"Diagnostics Verification", exp3_desc:"UDS/diagnostic session testing, DTC verification, and ECU communication validation across CAN and Automotive Ethernet networks.",
    exp4_title:"Active Safety Systems", exp4_desc:"Validation of active safety and driver-assistance functions, from sensor-in-the-loop setups through closed-loop scenario testing.",
    exp5_title:"Requirements Traceability", exp5_desc:"ASPICE-aligned requirements engineering with full traceability from spec through test case to release evidence.",
    exp6_title:"Automation Frameworks", exp6_desc:"Python-built pipelines that cut manual validation effort and compress reporting cycles from hours to minutes.",
    skills_title:"Technical Skills", skills_group1:"Test & Simulation", skills_group2:"Protocols & Networks", skills_group3:"Automation & Dev", skills_group4:"Process & Quality",
    experience_title:"Professional Experience", exp_current:"Current",
    job1_title:"Senior Technical Lead", job1_company:"Honda R&D Japan", job1_desc:"Leading OTA validation programs, automation initiatives, requirements-driven testing, and reporting automation for connected vehicle platforms.",
    job2_title:"Technical Lead — HIL & Active Safety", job2_company:"ZF", job2_desc:"Delivered HIL validation environments for braking and chassis control functions using dSPACE Scalexio and ModelDesk.",
    job3_title:"Test Coordinator", job3_company:"Brose", job3_desc:"Managed validation activities for Power Operated Tailgate and Electronic Power Window systems.",
    job4_title:"Senior Test Manager", job4_company:"Nexteer", job4_desc:"Led EPS validation programs and automated regression testing through dSPACE toolchain integration.",
    job5_title:"Verification & Diagnostics Engineer", job5_company:"BHTC Germany", job5_desc:"Executed HVAC ECU validation programs for BMW, Opel, and Bentley platforms.",
    job6_title:"Software Verification Engineer", job6_company:"Ford Programs", job6_desc:"Validated exterior lighting systems and developed reusable automation libraries.",
    job1_domain:"Connected Vehicle / OTA", job2_domain:"HIL & Chassis Safety", job3_domain:"Body Control", job4_domain:"EPS / Steering", job5_domain:"HVAC Diagnostics", job6_domain:"Exterior Lighting",
    projects_title:"Featured Projects",
    proj1_tag:"tool", proj1_title:"Report Generating Tool", proj1_desc:"Automated engineering report generation platform reducing manual analysis effort and accelerating stakeholder reporting.",
    proj2_tag:"pipeline", proj2_title:"ARG — Automated Report Generation", proj2_desc:"Framework for automated extraction, aggregation, and reporting of automotive validation results.",
    proj3_tag:"PyQt6", proj3_title:"DriveWidget", proj3_desc:"Desktop application for monitoring local and network drives with real-time storage visibility.",
    proj4_tag:"utility", proj4_title:"PDF Tools", proj4_desc:"Collection of PDF automation utilities for engineering documentation workflows.",
    proj5_tag:"parser", proj5_title:"BLF Time Extractor", proj5_desc:"Automotive engineering utility for extracting and analyzing timestamps from BLF log files.",
    proj6_tag:"desktop", proj6_title:"Quick Launcher Panel", proj6_desc:"Streamlines access to commonly used engineering applications from a single panel.",
    achievements_title:"Key Achievements",
    achv1_desc:"Reduction in manual validation effort through custom Python automation frameworks.",
    achv2_desc:"OTA test cycles reviewed daily across connected-vehicle release trains.",
    achv3_desc:"Reporting time compressed for validation stakeholders and program leadership.",
    achv4_desc:"Global OEM and Tier-1 programs delivered across Japan, Germany, and the US.",
    certifications_title:"Certifications",
    cta_title:"Let's ship the next release together 🚗", cta_sub:"Open to conversations on OTA validation, HIL programs, and automation leadership roles.", cta_button:"Get in Touch",
    contact_title:"Contact", contact_name_ph:"Your name *", contact_email_ph:"Your email *", contact_message_ph:"Message *",
    contact_recruiter_label:"I'm a recruiter / hiring manager — add role details", contact_company_ph:"Company (optional)", contact_role_ph:"Role you're hiring for (optional)",
    contact_jd_label:"Job description (optional, PDF/DOC)", contact_send:"Send Message",
    contact_sending:"Sending…", contact_success:"Message sent — thanks for reaching out! I'll reply by email soon.",
    contact_error:"Something went wrong sending that. Please try again or email directly.", contact_network_error:"Network error — please try again or email directly.",
    contact_key_email:"Email", contact_key_linkedin:"LinkedIn", contact_key_github:"GitHub", contact_key_based:"Based", contact_val_based:"Japan (Honda R&D)",
    resume_modal_title:"Before you download…", resume_modal_sub:"Just a quick intro so I know who's reaching out — takes 10 seconds, then your download starts automatically.",
    resume_name_ph:"Full name *", resume_email_ph:"Email *", resume_phone_ph:"Mobile number *", resume_reason_default:"Why are you downloading this? *",
    resume_reason1:"Recruitment / Hiring", resume_reason2:"Networking", resume_reason3:"Reference / Research", resume_reason4:"Other", resume_reason_other_ph:"Please specify",
    resume_submit:"Get Résumé", resume_sending:"Sending…", resume_success:"Thanks! Your download is starting…",
    resume_error:"Could not record your details — here is the file anyway.", resume_network_error:"Network issue — here is the file anyway.", resume_unconfigured:"Starting your download…",
    footer_copy:"© 2026 Manoj Kavikondala · Senior Technical Lead, Automotive OTA Validation", footer_back_top:"Top"
  },
  ja: {
    nav_about:"概要", nav_expertise:"専門分野", nav_experience:"職務経歴", nav_projects:"プロジェクト",
    nav_certifications:"資格", nav_contact:"お問い合わせ", nav_resume:"履歴書",
    hero_eyebrow:"ホンダ技術研究所 日本 — コネクテッドビークル基盤",
    hero_role:"シニアテクニカルリード", hero_role_sub:"自動車組込み検証リーダー",
    hero_summary:"自ら更新する車両のソフトウェア品質を12年以上にわたり保証。東京からミュンヘンまで、グローバルOEMおよびTier-1プログラムでOTAおよびHIL検証プログラムを主導しています。",
    hero_stat1_label:"検証経験年数", hero_stat2_label:"1日あたりのOTAサイクル数", hero_stat3_label:"手動工数削減率", hero_stat4_label:"レポート作成時間短縮",
    hero_cta_resume:"履歴書をダウンロード", hero_cta_contact:"お問い合わせ", hero_scroll:"スクロール",
    about_eyebrow:"私のアプローチ", about_title:"概要",
    about_p1:"日本を拠点にホンダ技術研究所を支援し、OTAおよびSOTA/FOTA検証プログラムを主導。dSPACE ScalexioによるHILテストベンチの構築、そして数千件のテストサイクルをエンジニアが判断材料にできる形へ変換するPython自動化の開発に携わっています。",
    about_p2:"これまでにBMW、フォード、オペル、ベントレーなどのOEM向けに、ブレーキ・シャシー制御、HVAC ECU、外装照明、パワーテールゲート、EPSシステムの検証を担当。常に「路上で故障したらどうなるか、その前にどう証明できるか」を問い続けています。",
    expertise_title:"コア・エキスパティーズ",
    exp1_title:"OTA / SOTA・FOTA検証", exp1_desc:"ロールバック、中断、フリート規模のリグレッションシナリオを含む、OTA配信ソフトウェア・ファームウェア更新のエンドツーエンド検証。",
    exp2_title:"HILコミッショニング", exp2_desc:"dSPACE Scalexioを用いたブレーキ・シャシー・ボディ制御検証向けHardware-in-the-Loopリグの構築・立ち上げ。",
    exp3_title:"診断検証", exp3_desc:"UDS診断セッションテスト、DTC検証、CANおよびAutomotive Ethernetネットワーク間のECU通信検証。",
    exp4_title:"アクティブセーフティシステム", exp4_desc:"センサー・イン・ザ・ループ環境からクローズドループシナリオテストまで、先進運転支援機能の検証。",
    exp5_title:"要求トレーサビリティ", exp5_desc:"ASPICEに準拠した要求工学。仕様からテストケース、リリースエビデンスまでの完全なトレーサビリティを確保。",
    exp6_title:"自動化フレームワーク", exp6_desc:"手動検証工数を削減し、レポート作成サイクルを数時間から数分へ短縮するPythonベースのパイプライン構築。",
    skills_title:"技術スキル", skills_group1:"テスト・シミュレーション", skills_group2:"プロトコル・ネットワーク", skills_group3:"自動化・開発", skills_group4:"プロセス・品質",
    experience_title:"職務経歴", exp_current:"現職",
    job1_title:"シニアテクニカルリード", job1_company:"ホンダ技術研究所（日本）", job1_desc:"コネクテッドビークル基盤向けにOTA検証プログラム、自動化施策、要求駆動型テスト、レポート自動化を主導。",
    job2_title:"テクニカルリード — HIL・アクティブセーフティ", job2_company:"ZF", job2_desc:"dSPACE ScalexioおよびModelDeskを用い、ブレーキ・シャシー制御機能向けHIL検証環境を構築。",
    job3_title:"テストコーディネーター", job3_company:"Brose", job3_desc:"パワーテールゲートおよび電動パワーウィンドウシステムの検証活動を管理。",
    job4_title:"シニアテストマネージャー", job4_company:"Nexteer", job4_desc:"EPS検証プログラムを主導し、dSPACEツールチェーン統合による回帰テストを自動化。",
    job5_title:"検証・診断エンジニア", job5_company:"BHTCジャーマニー", job5_desc:"BMW、オペル、ベントレー向けHVAC ECU検証プログラムを実施。",
    job6_title:"ソフトウェア検証エンジニア", job6_company:"フォードプログラム", job6_desc:"外装照明システムを検証し、再利用可能な自動化ライブラリを開発。",
    job1_domain:"コネクテッド／OTA", job2_domain:"HIL・シャシー安全", job3_domain:"ボディ制御", job4_domain:"EPS・ステアリング", job5_domain:"HVAC診断", job6_domain:"外装照明",
    projects_title:"主要プロジェクト",
    proj1_tag:"ツール", proj1_title:"レポート生成ツール", proj1_desc:"手動分析工数を削減し、関係者への報告を迅速化する自動エンジニアリングレポート生成プラットフォーム。",
    proj2_tag:"パイプライン", proj2_title:"ARG — 自動レポート生成", proj2_desc:"自動車検証結果の自動抽出・集計・レポート作成のためのフレームワーク。",
    proj3_tag:"PyQt6", proj3_title:"DriveWidget", proj3_desc:"ローカルおよびネットワークドライブをリアルタイムで監視するデスクトップアプリケーション。",
    proj4_tag:"ユーティリティ", proj4_title:"PDFツール", proj4_desc:"エンジニアリング文書ワークフロー向けPDF自動化ユーティリティ集。",
    proj5_tag:"パーサー", proj5_title:"BLFタイム抽出ツール", proj5_desc:"BLFログファイルからタイムスタンプを抽出・解析する自動車エンジニアリング向けユーティリティ。",
    proj6_tag:"デスクトップ", proj6_title:"クイックランチャーパネル", proj6_desc:"よく使うエンジニアリングアプリケーションへのアクセスを一元化。",
    achievements_title:"主な実績",
    achv1_desc:"カスタムPython自動化フレームワークにより手動検証工数を削減。",
    achv2_desc:"コネクテッドビークルのリリースにおいて、1日あたり1000件以上のOTAテストサイクルをレビュー。",
    achv3_desc:"検証関係者およびプログラムリーダーシップ向けのレポート作成時間を短縮。",
    achv4_desc:"日本・ドイツ・米国にわたり、グローバルOEMおよびTier-1プログラムを7件納品。",
    certifications_title:"資格・認定",
    cta_title:"次のリリースを共に届けましょう 🚗", cta_sub:"OTA検証、HILプログラム、自動化リーダーシップに関するご相談を歓迎します。", cta_button:"お問い合わせ",
    contact_title:"お問い合わせ", contact_name_ph:"お名前 *", contact_email_ph:"メールアドレス *", contact_message_ph:"メッセージ *",
    contact_recruiter_label:"採用担当者の方はこちら — 募集詳細を追加", contact_company_ph:"会社名（任意）", contact_role_ph:"募集職種（任意）",
    contact_jd_label:"職務記述書（任意、PDF/DOC）", contact_send:"メッセージを送信",
    contact_sending:"送信中…", contact_success:"メッセージを送信しました。ご連絡ありがとうございます。追ってご返信いたします。",
    contact_error:"送信中に問題が発生しました。再試行するか直接メールでご連絡ください。", contact_network_error:"ネットワークエラーが発生しました。再試行するか直接メールでご連絡ください。",
    contact_key_email:"メール", contact_key_linkedin:"LinkedIn", contact_key_github:"GitHub", contact_key_based:"所在地", contact_val_based:"日本（ホンダ技術研究所）",
    resume_modal_title:"ダウンロード前に", resume_modal_sub:"どなたからのご連絡か把握するため、簡単な情報をご入力ください（10秒程度）。送信後、自動的にダウンロードが開始されます。",
    resume_name_ph:"氏名 *", resume_email_ph:"メールアドレス *", resume_phone_ph:"携帯電話番号 *", resume_reason_default:"ダウンロードの目的を選択してください *",
    resume_reason1:"採用・リクルーティング", resume_reason2:"ネットワーキング", resume_reason3:"参考・調査", resume_reason4:"その他", resume_reason_other_ph:"詳細をご記入ください",
    resume_submit:"履歴書を取得", resume_sending:"送信中…", resume_success:"ありがとうございます。ダウンロードを開始します…",
    resume_error:"情報の記録に失敗しましたが、ファイルはダウンロードされます。", resume_network_error:"ネットワークエラーが発生しましたが、ファイルはダウンロードされます。", resume_unconfigured:"ダウンロードを開始します…",
    footer_copy:"© 2026 Manoj Kavikondala · シニアテクニカルリード、自動車OTA検証", footer_back_top:"トップへ"
  },
  de: {
    nav_about:"Über mich", nav_expertise:"Kompetenzen", nav_experience:"Berufserfahrung", nav_projects:"Projekte",
    nav_certifications:"Zertifizierungen", nav_contact:"Kontakt", nav_resume:"Lebenslauf",
    hero_eyebrow:"HONDA R&D JAPAN — VERNETZTE FAHRZEUGPLATTFORMEN",
    hero_role:"Senior Technical Lead", hero_role_sub:"Leiter automobile Embedded-Validierung",
    hero_summary:"Über zwölf Jahre Erfahrung in der Sicherstellung der Softwarequalität von Fahrzeugen, die sich selbst aktualisieren — Leitung von OTA- und HIL-Validierungsprogrammen für globale OEM- und Tier-1-Plattformen, von Tokio bis München.",
    hero_stat1_label:"Jahre Validierungserfahrung", hero_stat2_label:"OTA-Zyklen / Tag", hero_stat3_label:"Reduzierter Aufwand", hero_stat4_label:"Berichtszeit",
    hero_cta_resume:"Lebenslauf herunterladen", hero_cta_contact:"Kontakt aufnehmen", hero_scroll:"Scrollen",
    about_eyebrow:"MEIN ANSATZ", about_title:"Über mich",
    about_p1:"Mit Sitz in Japan unterstütze ich Honda R&D und leite OTA- sowie SOTA/FOTA-Validierungsprogramme, richte HIL-Prüfstände auf dSPACE Scalexio ein und entwickle die Python-Automatisierung, die tausende Testzyklen in handlungsrelevante Entscheidungen für Ingenieure verwandelt.",
    about_p2:"Dabei habe ich Brems- und Fahrwerksregelungen, HVAC-Steuergeräte, Außenbeleuchtung, elektrische Heckklappen und EPS-Systeme für OEMs wie BMW, Ford, Opel und Bentley validiert — stets mit der Frage im Kopf: Was passiert, wenn dies auf der Straße versagt, und wie belegen wir im Voraus, dass es nicht dazu kommt.",
    expertise_title:"Kernkompetenzen",
    exp1_title:"OTA- & SOTA/FOTA-Validierung", exp1_desc:"Vollständige Freigabe von drahtlos verteilten Software- und Firmware-Updates, einschließlich Rollback-, Unterbrechungs- und Flotten-Regressionsszenarien.",
    exp2_title:"HIL-Inbetriebnahme", exp2_desc:"Aufbau und Inbetriebnahme von Hardware-in-the-Loop-Prüfständen auf dSPACE Scalexio für Brems-, Fahrwerks- und Karosseriesteuerungs-Validierung.",
    exp3_title:"Diagnoseverifikation", exp3_desc:"UDS-Diagnosesitzungstests, DTC-Verifikation und ECU-Kommunikationsvalidierung über CAN- und Automotive-Ethernet-Netzwerke.",
    exp4_title:"Aktive Sicherheitssysteme", exp4_desc:"Validierung aktiver Sicherheits- und Fahrerassistenzfunktionen, von Sensor-in-the-Loop-Aufbauten bis zu geschlossenen Szenariotests.",
    exp5_title:"Anforderungs-Rückverfolgbarkeit", exp5_desc:"ASPICE-konforme Anforderungstechnik mit vollständiger Rückverfolgbarkeit von der Spezifikation über den Testfall bis zum Freigabenachweis.",
    exp6_title:"Automatisierungs-Frameworks", exp6_desc:"Python-basierte Pipelines, die den manuellen Validierungsaufwand senken und Berichtszyklen von Stunden auf Minuten verkürzen.",
    skills_title:"Technische Fähigkeiten", skills_group1:"Test & Simulation", skills_group2:"Protokolle & Netzwerke", skills_group3:"Automatisierung & Entwicklung", skills_group4:"Prozess & Qualität",
    experience_title:"Berufserfahrung", exp_current:"Aktuell",
    job1_title:"Senior Technical Lead", job1_company:"Honda R&D Japan", job1_desc:"Leitung von OTA-Validierungsprogrammen, Automatisierungsinitiativen, anforderungsgetriebenem Testen und Berichtsautomatisierung für vernetzte Fahrzeugplattformen.",
    job2_title:"Technical Lead — HIL & aktive Sicherheit", job2_company:"ZF", job2_desc:"Aufbau von HIL-Validierungsumgebungen für Brems- und Fahrwerksregelungsfunktionen mit dSPACE Scalexio und ModelDesk.",
    job3_title:"Test Coordinator", job3_company:"Brose", job3_desc:"Leitung der Validierungsaktivitäten für elektrische Heckklappen und elektrische Fensterheber.",
    job4_title:"Senior Test Manager", job4_company:"Nexteer", job4_desc:"Leitung von EPS-Validierungsprogrammen und Automatisierung von Regressionstests durch dSPACE-Toolchain-Integration.",
    job5_title:"Verification & Diagnostics Engineer", job5_company:"BHTC Germany", job5_desc:"Durchführung von HVAC-Steuergeräte-Validierungsprogrammen für BMW-, Opel- und Bentley-Plattformen.",
    job6_title:"Software Verification Engineer", job6_company:"Ford Programme", job6_desc:"Validierung von Außenbeleuchtungssystemen und Entwicklung wiederverwendbarer Automatisierungsbibliotheken.",
    job1_domain:"Vernetzung / OTA", job2_domain:"HIL & Fahrwerkssicherheit", job3_domain:"Karosseriesteuerung", job4_domain:"EPS / Lenkung", job5_domain:"HVAC-Diagnose", job6_domain:"Außenbeleuchtung",
    projects_title:"Ausgewählte Projekte",
    proj1_tag:"Tool", proj1_title:"Report-Generierungstool", proj1_desc:"Automatisierte Plattform zur Erstellung technischer Berichte, die den manuellen Analyseaufwand reduziert und die Berichterstattung beschleunigt.",
    proj2_tag:"Pipeline", proj2_title:"ARG — Automatisierte Berichtserstellung", proj2_desc:"Framework zur automatisierten Extraktion, Aggregation und Berichterstattung von Validierungsergebnissen.",
    proj3_tag:"PyQt6", proj3_title:"DriveWidget", proj3_desc:"Desktop-Anwendung zur Überwachung lokaler und Netzwerklaufwerke mit Echtzeit-Speicherübersicht.",
    proj4_tag:"Utility", proj4_title:"PDF-Tools", proj4_desc:"Sammlung von PDF-Automatisierungstools für technische Dokumentationsworkflows.",
    proj5_tag:"Parser", proj5_title:"BLF Time Extractor", proj5_desc:"Werkzeug zur Extraktion und Analyse von Zeitstempeln aus BLF-Logdateien.",
    proj6_tag:"Desktop", proj6_title:"Quick Launcher Panel", proj6_desc:"Vereinfacht den Zugriff auf häufig genutzte technische Anwendungen über ein zentrales Panel.",
    achievements_title:"Wichtigste Erfolge",
    achv1_desc:"Reduzierung des manuellen Validierungsaufwands durch maßgeschneiderte Python-Automatisierungs-Frameworks.",
    achv2_desc:"Über 1000 OTA-Testzyklen täglich im Rahmen vernetzter Fahrzeug-Releases geprüft.",
    achv3_desc:"Verkürzte Berichtszeiten für Validierungs-Stakeholder und Programmleitung.",
    achv4_desc:"Sieben globale OEM- und Tier-1-Programme in Japan, Deutschland und den USA realisiert.",
    certifications_title:"Zertifizierungen",
    cta_title:"Lassen Sie uns das nächste Release gemeinsam liefern 🚗", cta_sub:"Offen für Gespräche über OTA-Validierung, HIL-Programme und Automatisierungsführung.", cta_button:"Kontakt aufnehmen",
    contact_title:"Kontakt", contact_name_ph:"Ihr Name *", contact_email_ph:"Ihre E-Mail *", contact_message_ph:"Nachricht *",
    contact_recruiter_label:"Ich bin Recruiter/in — Stellendetails hinzufügen", contact_company_ph:"Unternehmen (optional)", contact_role_ph:"Ausgeschriebene Position (optional)",
    contact_jd_label:"Stellenbeschreibung (optional, PDF/DOC)", contact_send:"Nachricht senden",
    contact_sending:"Wird gesendet…", contact_success:"Nachricht gesendet — vielen Dank für Ihre Kontaktaufnahme! Ich melde mich per E-Mail.",
    contact_error:"Beim Senden ist ein Fehler aufgetreten. Bitte erneut versuchen oder direkt per E-Mail kontaktieren.", contact_network_error:"Netzwerkfehler — bitte erneut versuchen oder direkt per E-Mail kontaktieren.",
    contact_key_email:"E-Mail", contact_key_linkedin:"LinkedIn", contact_key_github:"GitHub", contact_key_based:"Standort", contact_val_based:"Japan (Honda R&D)",
    resume_modal_title:"Vor dem Download …", resume_modal_sub:"Nur eine kurze Vorstellung, damit ich weiß, wer sich meldet — dauert 10 Sekunden, danach startet Ihr Download automatisch.",
    resume_name_ph:"Vollständiger Name *", resume_email_ph:"E-Mail *", resume_phone_ph:"Mobilnummer *", resume_reason_default:"Warum laden Sie dies herunter? *",
    resume_reason1:"Rekrutierung / Einstellung", resume_reason2:"Networking", resume_reason3:"Referenz / Recherche", resume_reason4:"Sonstiges", resume_reason_other_ph:"Bitte angeben",
    resume_submit:"Lebenslauf erhalten", resume_sending:"Wird gesendet…", resume_success:"Danke! Ihr Download startet…",
    resume_error:"Details konnten nicht übermittelt werden — hier ist die Datei trotzdem.", resume_network_error:"Netzwerkproblem — hier ist die Datei trotzdem.", resume_unconfigured:"Download wird gestartet…",
    footer_copy:"© 2026 Manoj Kavikondala · Senior Technical Lead, Automotive OTA-Validierung", footer_back_top:"Nach oben"
  }
};

let currentLang = 'en';
const t = (key) => (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;

function applyLanguage(lang){
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) el.setAttribute('placeholder', translations[lang][key]);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('preferredLang', lang); } catch (e) { /* storage unavailable, ignore */ }
}

document.addEventListener('DOMContentLoaded', () => {

  /* 0. Language init — saved preference, else browser language, else English */
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('preferredLang');
    if (saved && translations[saved]) initialLang = saved;
    else {
      const browserLang = (navigator.language || '').slice(0, 2);
      if (translations[browserLang]) initialLang = browserLang;
    }
  } catch (e) { /* ignore */ }
  applyLanguage(initialLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  /* 1. Theme toggle (default dark, cinematic) */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  themeToggle.addEventListener('click', () => {
    const next = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', next);
  });

  /* 2. Animated hero counters */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);

  /* 3. Scroll-reveal chapters */
  const revealTargets = document.querySelectorAll('.chapter');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* 4. Active nav highlight */
  const navLinks = document.querySelectorAll('.topnav a');
  const navMap = new Map();
  navLinks.forEach(link => navMap.set(link.getAttribute('data-target'), link));
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = navMap.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.5, rootMargin: '-20% 0px -50% 0px' });
  revealTargets.forEach(el => { if (navMap.has(el.id)) navObserver.observe(el); });

  /* 5. Back to top */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* 6. Recruiter fields toggle */
  const recruiterCheck = document.getElementById('recruiterCheck');
  const recruiterFields = document.getElementById('recruiterFields');
  if (recruiterCheck && recruiterFields) {
    recruiterCheck.addEventListener('change', () => { recruiterFields.hidden = !recruiterCheck.checked; });
  }

  /* 7. Contact form -> Formspree */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('sendEmailBtn');
      const formData = new FormData(contactForm);

      if (contactForm.action.includes('YOUR_FORM_ID')) {
        formStatus.textContent = 'Form is not connected yet — set your Formspree endpoint in index.html.';
        formStatus.className = 'form-status error';
        return;
      }

      submitBtn.disabled = true;
      formStatus.textContent = t('contact_sending');
      formStatus.className = 'form-status';

      try {
        const response = await fetch(contactForm.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
        if (response.ok) {
          formStatus.textContent = t('contact_success');
          formStatus.className = 'form-status success';
          contactForm.reset();
          if (recruiterFields) recruiterFields.hidden = true;
        } else {
          formStatus.textContent = t('contact_error');
          formStatus.className = 'form-status error';
        }
      } catch (err) {
        formStatus.textContent = t('contact_network_error');
        formStatus.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* 8. Résumé gate — capture name/email/phone/reason before releasing the file */
  const resumeTriggers = document.querySelectorAll('.resume-trigger');
  const resumeOverlay = document.getElementById('resumeModalOverlay');
  const resumeClose = document.getElementById('resumeModalClose');
  const resumeForm = document.getElementById('resumeGateForm');
  const resumeReason = document.getElementById('resumeReason');
  const resumeReasonOther = document.getElementById('resumeReasonOther');
  const resumeStatus = document.getElementById('resumeFormStatus');
  const resumeSubmitBtn = document.getElementById('resumeSubmitBtn');
  let pendingResumeHref = null;

  const openResumeModal = (href) => {
    pendingResumeHref = href;
    resumeOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    resumeForm.querySelector('input[name="name"]').focus();
  };
  const closeResumeModal = () => {
    resumeOverlay.hidden = true;
    document.body.style.overflow = '';
  };

  resumeTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal(trigger.getAttribute('href'));
    });
  });
  resumeClose.addEventListener('click', closeResumeModal);
  resumeOverlay.addEventListener('click', (e) => { if (e.target === resumeOverlay) closeResumeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !resumeOverlay.hidden) closeResumeModal(); });

  resumeReason.addEventListener('change', () => {
    resumeReasonOther.hidden = resumeReason.value !== 'Other';
    resumeReasonOther.required = resumeReason.value === 'Other';
  });

  const triggerActualDownload = (href) => {
    const a = document.createElement('a');
    a.href = href;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  resumeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!pendingResumeHref) return;

    const formEndpoint = contactForm ? contactForm.action : '';
    const formData = new FormData(resumeForm);

    resumeSubmitBtn.disabled = true;
    resumeStatus.textContent = t('resume_sending');
    resumeStatus.className = 'form-status';

    if (!formEndpoint || formEndpoint.includes('YOUR_FORM_ID')) {
      console.warn('Résumé gate: Formspree endpoint not set. Downloading without recording the request.');
      resumeStatus.textContent = t('resume_unconfigured');
      resumeStatus.className = 'form-status success';
      triggerActualDownload(pendingResumeHref);
      setTimeout(closeResumeModal, 900);
      resumeSubmitBtn.disabled = false;
      return;
    }

    try {
      const response = await fetch(formEndpoint, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      if (response.ok) {
        resumeStatus.textContent = t('resume_success');
        resumeStatus.className = 'form-status success';
        triggerActualDownload(pendingResumeHref);
        resumeForm.reset();
        resumeReasonOther.hidden = true;
        setTimeout(closeResumeModal, 1200);
      } else {
        resumeStatus.textContent = t('resume_error');
        resumeStatus.className = 'form-status error';
        triggerActualDownload(pendingResumeHref);
      }
    } catch (err) {
      resumeStatus.textContent = t('resume_network_error');
      resumeStatus.className = 'form-status error';
      triggerActualDownload(pendingResumeHref);
    } finally {
      resumeSubmitBtn.disabled = false;
    }
  });
});
