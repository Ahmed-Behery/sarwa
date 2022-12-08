import Aos from "aos";
import { useEffect, useState } from "react";
import Banner from "../UI/Banner";
import PolicyCard from "../UI/PolicyCard";
import PolicyCard2 from "../UI/PolicyCard2";
import Tabs from "../UI/Tabs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import style from "../Content/JoinUsForm.module.css";

const OurProductsLayout = () => {
  const [sarwaInsuranceData, setSarwaInsuranceData] = useState();
  const [sarwaLifeData, setSarwaLifeData] = useState();
  const { t, lang } = useTranslation("common");
  const location = useRouter();
  const lifeRetail = [
    t("proTitle1L"),
    t("proTitle2L"),
    t("proTitle3L"),
    t("he"),
    t("she"),
    t("smoke"),
  ];
  const lifeCommerial = [
    t("pro"),
    t("ins"),
    t("co"),
    t("acc"),
    t("med"),
    t("sem"),
    t("accp"),
  ];
  const citys = [
    t("city"),
    t("alex"),
    t("Cairo"),
    t("Giza"),
    t("Qalyubia"),
    t("Port"),
    t("Suez"),
    t("Gharbia"),
    t("Dakahlia"),
    t("Asyut"),
    t("Fayoum"),
    t("Aswan"),
    t("El-Minya"),
    t("Luxor"),
    t("Sohag"),
    t("Kafr"),
  ];

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:3001/api")
      .then((apiData) => apiData.json())
      .then((apiData) => {
        setSarwaInsuranceData(
          apiData.result[0].data.sarwa_insurance.products_page
        );
        setSarwaLifeData(apiData.result[0].data.sarwa_life.products_page);
      });
  }, []);

  // useEffect(() => {
  //   data && console.log(data.result[0].data.sarwa_insurance.products_page);
  // }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(t("messageF"));
  };

  const productsApi = {
    "sawra-insurance": {
      "products-page": {
        banner:
          "https://contact-clients-dev.s3.amazonaws.com/ProductsInsBannar.jpg",
        cards: {
          commercial: [
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsProperty.jpg",
              title: { en: "Property Insurance", ar: "تأمين الممتلكات" },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "Without appropriate insurance, property losses can easily cause the entire enterprise to suffer. Your business assets aren't just expensive – they keep your business running.",
                ar: "إن أهمية أصول الشركة ليست في قيمتها فقط ولكن في كونها الأساس لإستمرار الأعمال, مع وثيقة ثروة للتأمين للممتلكات نغطي أصول وممتلكات الشركة ضد   الأخطار الغير متوقعة مثل الحرائق والانفجارات والكوارث الطبيعية والسطو وما إلى   ذلك",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/propertyInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsEngineering.jpg",
              title: { en: "Engineering Insurance", ar: "التأمينات الهندسية" },
              subtitle: {
                en: "Full Protection For Owners & Contractors",
                ar: "الحماية الكاملة لكل من المالكين والمقاولين",
              },
              text: {
                en: "Our Engineering Insurance Programs covers many vital scopes from power and public utilities, all the way to construction, infrastructure and civil engineering projects.",
                ar: "تقدم ثروة للتأمين برامج تأمين هندسي تناسب كافة المشروعات سواء كانت مشروعات بناء مباني أو محطات كهرباء أو مياه أو بنية تحتية أو غيرها من المشروعات",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/engineeringInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsMotorFleet.jpg",
              title: {
                en: "Motor Fleet Insurance",
                ar: "تأمين أساطيل السيارات",
              },
              subtitle: {
                en: "Safely On The Road To Success",
                ar: "نساعدك على استمرار اعمالك",
              },
              text: {
                en: "Keeping your business running on the road safely at all times, Motor Fleet insurance is offered to business-owned vehicles and corporate fleets.",
                ar: "نحن ندرك أهمية أن يكون اسطول سيارات شركتك يعمل بكفاءة دائمة  لذلك صممنا وثائقنا لتضمن الإصلاح السريع لسيارات شركتك مع الحفاظ على  أعلى درجات الجودة",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/motorFleetInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsMarine.jpg",
              title: {
                en: "Marine Insurance",
                ar: "التأمين البحري والبري بضائع",
              },
              subtitle: {
                en: "Covering All Things Marine",
                ar: "",
              },
              text: {
                en: "We help your business continuity by protecting the logistical movement of goods or services. We insure your cargo transported by sea, air or inland.",
                ar: "ثروة للتأمين تساعدك على استمرار أعمالك بتقديم حماية شاملة للحركة اللوجستية للبضائع المنقولة بحراً أو براً أو جواً,   وثائقنا تغطي بضاعتك طبقاً لشروط التأمين الدولية",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/marineInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsPublicLiability.jpg",
              title: {
                en: "Public Liability Insurance (PL)",
                ar: "تأمين المسؤوليات والتأمينات المالية",
              },
              subtitle: {
                en: "SARWA Insurance provides Public Liability insurance to cover you against any claims made against your business – for example, if you were held",
                ar: "تقدم ثروة للتأمين هذا النوع من التأمين لحماية أعمالك ضد أي أحكام قضائية قد يحكم بها ضد شركتك في حال حدوث  أي إصابات جسدية أو أضرار بممتلكات الغير بسبب اعمال الشركة",
              },
              text: {
                en: "",
                ar: "",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/publicLiabilityInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsMedical.jpg",
              title: { en: "Medical Insurance", ar: "تأمين طبي" },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "In the Health Insurance Industry field, we are determined to establish a successful and sustainable partnership with our customers. We strive to be a beacon of success that attracts clients",
                ar: "في مجال التأمين الطبي، ثروة للتأمين تصمم دائماً على إقامة شراكة ناجحة ومستدامة مع عملائها, نحن نسعى جاهدين لنكون منارة النجاح التي تجذب العملاء بأن نكون دوماً على مستوى توقعاتهم",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/medicalInsurance",
            },
          ],
          retail: [
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsMotor.jpg",
              title: { en: "Motor Insurance", ar: "تأمين السيارات" },
              subtitle: {
                en: "We Keep You Driving Forward",
                ar: "نجعلك دائماً تقود إلى الأمام",
              },
              text: {
                en: "Driving becomes more reassuring when you know your vehicle is protected and insured. SARWA Motor Insurance policy offers comprehensive coverage for your car.",
                ar: "نحن نجعلك مطمئناً وأنت تقود سيارتك، وثيقتنا توفر حماية شاملة لسيارتك في حالة وقوع حادث لا قدر الله يكون هدفنا إعادة مالك السيارة إلى  قيادة سيارته مجدداً  بأسرع ما يمكن وبأقل قدر من الإزعاج بفضل تعاقدنا مع أفضل مقدمي خدمات الطريق",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/motorInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsHome.jpg",
              title: { en: "Home Insurance Plan", ar: "تأمين المنزل" },
              subtitle: {
                en: "Designed To Protect Your Home",
                ar: "وثيقة مصممة خصيصاً لحماية منزلك",
              },
              text: {
                en: "On planning protection against losses occurring in your home and its content, SARWA Insurance puts in an intensely comprehensive package.",
                ar: "وثيقة ثروة للتأمين تقدم تغطية شاملة لمنزلك أو محتوياته حيث تغطي الفقد أو التلف الذي قد يحدث للمنزل أو محتوياته نتيجة حريق أو برق أو حريق ناتج عن انفجار",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/homeInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductInsPersonal.jpg",
              title: {
                en: "Personal Accidents & Life Style",
                ar: "تأمين الحوادث الشخصية ونمط الحياة",
              },
              subtitle: {
                en: "Helps You to Focus On Recovery Not Finances",
                ar: "نساعدك على أن تركز على التعافي فقط,  اترك النفقات علينا",
              },
              text: {
                en: "Since accidents come suddenly, preparing yourself with financial support might be the smart and wise decision. When opting for a PA.",
                ar: "إنه من الحكمة دوماً ان تكون مستعد مالياً للمفاجأة الغير سارة، تقدم لك ثروة للتأمين وثيقة توفر لك الحماية المالية الكاملة في حالة وقوع حادث لا قدر الله حيث تغطي الأخطار المحتملة مثل الوفاة أو الإصابات أو العجز بسبب حوادث",
              },
              imgRight: false,
              proLink: "",
            },
          ],
        },
      },
    },
    "sawra-life": {
      "products-page": {
        banner:
          "https://contact-clients-dev.s3.amazonaws.com/ProductsLiveBannar.jpg",
        cards: {
          commercial: [
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupLife.jpg",
              title: {
                en: "Group Life & Disability",
                ar: "وثيقة تأمين جماعي - حماية",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A product that offers benefits to corporate accounts covering their employees against death, permanent total disability & permanent partial disability at a preferred cost & simplified enrollment procedure.",
                ar: "يقدم هذا المنتج حماية متميزة ضد أخطار الوفاة أو العجز الكامل الدائم أو العجز الجزئي الدائم لموظفي الشركات وذلك بتكلفة متميزة وشروط التحاق ميسرة",
              },
              imgRight: false,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupCreditLife.jpg",
              title: {
                en: "Group Credit Life",
                ar: "وثيقة تأمين جماعي - إئتمان",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A product that offers benefits to the borrowers against death & permanent total disability. In such incidents, the insurance company will pay to the bank the outstanding balance of the loan.",
                ar: "يقدم هذا البرنامج حماية تأمينية متميزة للمقترضين ضد أخطار الوفاة والعجز الكلي، حيث تقوم الشركة بسداد رصيد القرض نيابة عن المؤمن عليه في حالة وفاته أو إصابته بأي من حالات العجز الكلي لا قدر الله",
              },
              imgRight: true,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLivePension.jpg",
              title: { en: "Group Pension", ar: "وثيقة تأمين جماعي - استثمار" },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A group saving plans that provide long-term & flexible saving solutions that financially support employees at retirement.",
                ar: "يتميز هذا البرنامج بتقديم حلول مرنة من حيث التكلفة وتصميم المزايا بهدف دفع مكافأة نهاية خدمة مناسبة للعاملين عند بلوغ سن التقاعد",
              },
              imgRight: false,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLivePersonal.jpg",
              title: {
                en: "Group Personal Accidents",
                ar: "وثيقة تأمين جماعي - حوادث شخصية",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "Group personal accidents policy provides financial coverage against unforeseen events causing accidental death, total permanent disability & partial permanent disability due to accidents at a very competitive cost.",
                ar: "يقدم هذا البرنامج التأميني حماية متميزة للعاملين بالشركات ضد أخطار الحوادث الشخصية (وفاة أو عجز) وتتميز هذه البرامج بتكلفتها المنخفضة والتي تسمح لأصحاب الأعمال باختيار مبالغ حماية تأمينية مرتفعة مقابل تكلفة زهيدة من الأقساط",
              },
              imgRight: true,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveMedical.jpg",
              title: { en: "Group Medical", ar: "وثيقة تأمين طبي جماعي" },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "Group insurance coverage for employees against medical risks can be extended to include dental, optical & maternity benefits. The plans are designed to provide the most adequate level of services based on ourDirectors settlement arrangements. Accordingly, the insured will not pay out of their pockets against medical services within the contracted medical network.",
                ar: "يوفر هذا البرنامج حماية متميزة للعاملين بالشركات لتغطية مصروفات العلاج الطبي والتي قد تمتد لتشمل مزايا علاج الأسنان والبصريات والمزايا الخاصة بالحمل والولادة ويهدف هذا البرنامج لتقديم أفضل مستويات الخدمة بنظام للسداد المباشر داخل الهيئة الطبية",
              },
              imgRight: false,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveGroupLifeEnterprises.jpg",
              title: {
                en: "Small & Medium Enterprises Packages (SME’S)",
                ar: "(SME’S) الشركات المتوسطة والصغيرة",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "Designed for small corporations starting from 5 members up to 250 members. The plan provides a prepackaged life, disability & medical benefits that suits all employment levels. In the meantime, all plans are re-priced, accordingly employers can automatically choose their plans & enroll their employees.",
                ar: "يعد هذا البرنامج هو الأفضل للشركات الصغيرة والمتوسطة حيث يقدم عدد من برامج العلاج الطبي والتأمين على الحياة وضد أخطار العجز وتتنوع هذه البرامج من حيث المزايا والتكلفة لتتناسب مع احتياجات المستويات الوظيفية المختلفة داخل الشركة الواحدة كما تتميز هذه البرامج بكونها سابقة التسعير حيث يتمكن أصحاب الأعمال من اختيار البرامج الملائمة بصورة مباشرة وإدراج العاملين المراد تغطيتهم تأمينياً",
              },
              imgRight: true,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveVoluntary.jpg",
              title: {
                en: "Voluntary Personal Accidents Plan",
                ar: "وثيقة تأمين جماعي - حوادث شخصية اختياري",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A plan that provides protection against personal accidents risks (death & disability) at a very low cost. Typically, the plan is designed to provide an additional protection benefits on a voluntary basis to employees, who will pay the low-cost premium monthly as a payroll deduction.",
                ar: "ويمثل هذا البرنامج حماية تأمينية إضافية ضد مخاطر الحوادث الشخصية (وفاة أو عجز)، حيث يقوم كل موظف باختيار مبالغ الحماية التأمينية والتي يقوم بسداد تكلفتها بصورة شهرية",
              },
              imgRight: false,
              proLink: "",
            },
          ],
          retail: [
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLifeSaving.jpg",
              title: {
                en: "Saving & Protection",
                ar: "الحياة ثروة (تأمين مؤقت محدد المدة)",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "Our unique individual product provides saving & protection flexible coverages. On the saving front, the insured can choose a targeted saving amount that suits his different future needs such as retirement, children's marriage & education cost. On the insurance side, the insured can choose the required protection amount, which can be extended in case of death up to age 85, and for critical illnesses & disability up to age 65.",
                ar: "منتج متميز للعملاء الأفراد حيث يقدم الحماية التأمينية ومزايا الادخار حيث يتمكن المؤمن عليه من خلال هذا البرنامج من اختيار مبلغ الادخار المستهدف وكذلك تحديد مواعيد الاستحقاق المستهدفة لتتلاءم مع احتياجاته سواء كانت تقاعد، تعليم أو زواج الأبناء كما يقوم المؤمن عليه باختيار مبالغ الحماية التأمينية ضد أخطار الوفاة والتي تمتد حتى سن الخامسة والثمانين، وكذلك ضد أخطار العجز والأمراض الحرجة والتي تمتد حتى سن الخامسة والستين ويتميز هذا البرنامج بالمرونة في سداد الأقساط من خلال العديد من الاختيارات التي تقدمها الشركة",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/motorInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLifeDisability.jpg",
              title: {
                en: "Life & Disability Coverage",
                ar: "ثروة أمان (تجديد تلقائى بدون دراسة)",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A yearly renewable policy that covers insured against death, disabilities & critical illnesses at a very competitive cost. In addition, the policy offers a guaranteed renewable for 5 years without repeating medical checkups.",
                ar: "برنامج التأمين على الحياة المؤقت الذي يوفر حماية للمؤمن عليه ضد أخطار الوفاة والعجز لمدة سنة بشروط وتكلفة مناسبة تتلاءم مع إمكانيات جميع الأفراد كما يقدم البرنامج ميزة إضافية للمؤمن عليهم حيث يقوم البرنامج بضمان الأسعار حتى مدة خمس سنوات وبدون كشف طبي إضافي",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/homeInsurance",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveDisabilityLong.jpg",
              title: {
                en: "Life & Disability Long Term Coverage",
                ar: "ثروة لايف (ادخار)",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "This unique coverage allows insured who are requesting life & disability insurance for long terms (up to 7 years) to have such coverage for an equal premium during the tenor of the policy & with only one medical checkup at the policy start date. ",
                ar: "برنامج متميز للتأمين ضد مخاطر الوفاة والعجز لمدة تمتد حتى سبع سنوات مع قسط سنوي ثابت طوال مدة التأمين وبدون أي كشف طبي إضافي خلال المدة",
              },
              imgRight: false,
              proLink: "/sarwa-insurance/product/personalAccidents",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveMaleCancer.jpg",
              title: {
                en: "He (Male Cancer)",
                ar: "الحماية ضد أخطار السرطان للرجال",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A very low-cost policy with a high protection value against male cancer diseases (malignant diseases of prostate, penis, testes, spermatic cord, scrotum, seminal vesicles, tunica vaginalis).",
                ar: "من أفضل برامج الحماية ضد مخاطر السرطان للرجال ويتميز بتكلفة قليلة لا تتعدى عدة جنيهات",
              },
              imgRight: true,
              proLink: "/sarwa-insurance/product/product-3",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveFemaleCancer.jpg",
              title: {
                en: "She (Female Cancer)",
                ar: "من أفضل برامج الحماية ضد مخاطر السرطان للرجال ويتميز بتكلفة قليلة لا تتعدى عدة جنيهات",
              },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "A very low-cost policy with a high protection value against female cancer diseases (malignant tumors of the breast, vulva, vagina, cervix, uterus, ovary, fallopian tubes, placenta) - cosmetic surgery benefit to the affected parts because of female cancer, if needed. ",
                ar: "من أفضل برامج الحماية ضد مخاطر السرطان للإناث ويتميز بتكلفة قليلة لا تتعدى عدة جنيهات",
              },
              imgRight: false,
              proLink: "",
            },
            {
              imgUrl:
                "https://contact-clients-dev.s3.amazonaws.com/ProductLiveSmokers.jpg",
              title: { en: "Smokers", ar: "الحماية ضد أخطار التدخين" },
              subtitle: {
                en: "",
                ar: "",
              },
              text: {
                en: "An adequate cost policy that insures the person in case diagnosed with one of the smoker critical illnesses (lung cancer, oral cavity and pharynx cancer, end-stage lung disease, heart attack, stroke)",
                ar: "بتكلفة مناسبة يقدم هذا البرنامج الحماية ضد الأمراض الحرجة الرئيسية وتشمل سرطان الرئة، سرطان الفم والبلعوم، الجلطة والأزمة القلبية، وهي الأمراض التي يكون التدخين غالباً هو السبب الرئيسي لحدوثها ",
              },
              imgRight: true,
              proLink: "",
            },
          ],
        },
      },
    },
  };
  if (!sarwaInsuranceData && !sarwaLifeData) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <Banner
        imgUrl={
          location.pathname.includes("/sarwa-insurance")
            ? sarwaInsuranceData.banner
            : sarwaLifeData.banner
        }
        height={"250px"}
      />

      <div className="container mt-4 pg">
        <Tabs
          className="product-d"
          tabOneTitle={t("retail")}
          tabOneContent={
            <>
              {location.pathname.includes("/sarwa-insurance")
                ? productsApi["sawra-insurance"][
                    "products-page"
                  ].cards.retail.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))
                : productsApi["sawra-life"]["products-page"].cards.retail.map(
                    (item, index) => (
                      <PolicyCard2
                        imgUrl={item.imgUrl}
                        title={lang == "en" ? item.title.en : item.title.ar}
                        supTitle={
                          lang == "en" ? item.subtitle.en : item.subtitle.ar
                        }
                        text={lang == "en" ? item.text.en : item.text.ar}
                        imgRight={item.imgRight}
                        proLink={item.proLink}
                      />
                    )
                  )}
            </>
          }
          tabTwoTitle={t("comercial")}
          tabTwoContent={
            <>
              {location.pathname.includes("/sarwa-insurance")
                ? productsApi["sawra-insurance"][
                    "products-page"
                  ].cards.commercial.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))
                : productsApi["sawra-life"][
                    "products-page"
                  ].cards.commercial.map((item, index) => (
                    <PolicyCard2
                      imgUrl={item.imgUrl}
                      title={lang == "en" ? item.title.en : item.title.ar}
                      supTitle={
                        lang == "en" ? item.subtitle.en : item.subtitle.ar
                      }
                      text={lang == "en" ? item.text.en : item.text.ar}
                      imgRight={item.imgRight}
                      proLink={item.proLink}
                    />
                  ))}
            </>
          }
        />

        {location.pathname.includes("sarwa-Life") ? (
          <div id="reqP">
            <div
              dir={t("dir")}
              className={
                style.join__form + " " + style.contact__formL + " my-5"
              }
              id="join"
            >
              <h3 className="text-center text-white"> {t("Reqp")}</h3>

              <form onSubmit={handleSubmit} className="mt-4">
                <div className="col-md-12 mb-3">
                  <input
                    type="text"
                    className={t("text-align") + " " + style.form_control}
                    placeholder={t("namePlace1")}
                    required
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <input
                    type="email"
                    placeholder={t("mailPlace")}
                    className={t("text-align") + " " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    placeholder={t("phonePlace")}
                    type="text"
                    className={t("text-align") + " " + style.form_control}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <select
                    type="text"
                    className={style.form_select + " " + style.form_control}
                    required
                  >
                    {citys.map((city) => {
                      return <option key={city.index}>{city}</option>;
                    })}
                  </select>
                </div>

                <div className="col-lg-12">
                  <select
                    className={
                      style.form_select + " mb-3 " + style.form_control
                    }
                    required
                  >
                    <option className={style.opt_title} disabled>
                      {t("retailT")}
                    </option>
                    {lifeRetail.map(function (policy, index) {
                      return <option key={index}>{policy}</option>;
                    })}

                    <option className={style.opt_title} disabled>
                      {t("comercial")}
                    </option>
                    {lifeCommerial.map(function (policy, index) {
                      return <option key={index}>{policy}</option>;
                    })}
                  </select>

                  <div className={style.btn_glob_contain}>
                    <button className="btn btn-primary w-100 " type="submit">
                      {t("applyBtn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OurProductsLayout;
