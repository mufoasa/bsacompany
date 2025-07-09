// Language translations
const translations = {
  sq: {
    "nav.home": "Ballina",
    "nav.services": "Shërbimet",
    "nav.about": "Rreth Nesh",
    "nav.contact": "Kontakti",
    "hero.slogan": "Zgjidhje profesionale për ngrohje, ftohje dhe instalime",
    "hero.cta": "Shiko Shërbimet",
    "services.title": "Shërbimet Tona",
    "services.heating.title": "Nxemje Qendrore",
    "services.heating.description":
      "Instalim dhe mirëmbajtje profesionale e sistemeve të nxemjes qendrore për shtëpi dhe biznese.",
    "services.ac.title": "Klimatizim",
    "services.ac.description": "Shitje dhe instalim i sistemeve të kondicionimit të ajrit për komfort maksimal.",
    "services.water.title": "Instalim i Ujit",
    "services.water.description":
      "Instalime të plota të sistemeve të ujit të pijshëm dhe të nxehtë për çdo lloj ndërtese.",
    "services.sewer.title": "Kanalizim",
    "services.sewer.description": "Sisteme të plota kanalizimi dhe drenazhi me teknologji moderne.",
    "about.title": "Rreth Nesh",
    "about.description":
      "BSA Company është një kompani e specializuar në fushën e instalimeve teknike me vite përvojë në treg. Ne ofrojmë shërbime të plota për nxemje qendrore, klimatizim, instalime uji dhe kanalizim. Ekipi ynë i kualifikuar siguron cilësi të lartë dhe shërbim profesional për çdo projekt.",
    "about.feature1": "Përvojë shumëvjeçare",
    "about.feature2": "Ekip i kualifikuar",
    "about.feature3": "Cilësi e garantuar",
    "contact.title": "Kontaktoni Me Ne",
    "contact.phone": "Telefoni",
    "contact.email": "Email",
    "contact.address": "Adresa",
    "contact.form.name": "Emri",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefoni",
    "contact.form.message": "Mesazhi",
    "contact.form.submit": "Dërgo Mesazhin",
    "footer.description": "Zgjidhje profesionale për ngrohje, ftohje dhe instalime",
    "footer.services": "Shërbimet",
    "footer.contact": "Kontakti",
    "footer.follow": "Na Ndiqni",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "hero.slogan": "Professional solutions for heating, cooling and installations",
    "hero.cta": "View Services",
    "services.title": "Our Services",
    "services.heating.title": "Central Heating",
    "services.heating.description":
      "Professional installation and maintenance of central heating systems for homes and businesses.",
    "services.ac.title": "Air Conditioning",
    "services.ac.description": "Sales and installation of air conditioning systems for maximum comfort.",
    "services.water.title": "Water Installation",
    "services.water.description":
      "Complete installations of drinking and hot water systems for all types of buildings.",
    "services.sewer.title": "Sewer Systems",
    "services.sewer.description": "Complete sewerage and drainage systems with modern technology.",
    "about.title": "About Us",
    "about.description":
      "BSA Company is a specialized company in the field of technical installations with years of experience in the market. We offer complete services for central heating, air conditioning, water installations and sewerage. Our qualified team ensures high quality and professional service for every project.",
    "about.feature1": "Years of experience",
    "about.feature2": "Qualified team",
    "about.feature3": "Guaranteed quality",
    "contact.title": "Contact Us",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "footer.description": "Professional solutions for heating, cooling and installations",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
  mk: {
    "nav.home": "Дома",
    "nav.services": "Услуги",
    "nav.about": "За Нас",
    "nav.contact": "Контакт",
    "hero.slogan": "Професионални решенија за греење, ладење и инсталации",
    "hero.cta": "Погледни Услуги",
    "services.title": "Наши Услуги",
    "services.heating.title": "Централно Греење",
    "services.heating.description":
      "Професионална инсталација и одржување на системи за централно греење за домови и бизниси.",
    "services.ac.title": "Климатизација",
    "services.ac.description": "Продажба и инсталација на системи за климатизација за максимален комфор.",
    "services.water.title": "Водни Инсталации",
    "services.water.description": "Комплетни инсталации на системи за питка и топла вода за сите типови згради.",
    "services.sewer.title": "Канализација",
    "services.sewer.description": "Комплетни системи за канализација и дренажа со модерна технологија.",
    "about.title": "За Нас",
    "about.description":
      "BSA Company е специјализирана компанија во областа на техничките инсталации со години искуство на пазарот. Ние нудиме комплетни услуги за централно греење, климатизација, водни инсталации и канализација. Нашиот квалификуван тим обезбедува висок квалитет и професионална услуга за секој проект.",
    "about.feature1": "Години искуство",
    "about.feature2": "Квалификуван тим",
    "about.feature3": "Гарантиран квалитет",
    "contact.title": "Контактирајте Не",
    "contact.phone": "Телефон",
    "contact.email": "Емаил",
    "contact.address": "Адреса",
    "contact.form.name": "Име",
    "contact.form.email": "Емаил",
    "contact.form.phone": "Телефон",
    "contact.form.message": "Порака",
    "contact.form.submit": "Испрати Порака",
    "footer.description": "Професионални решенија за греење, ладење и инсталации",
    "footer.services": "Услуги",
    "footer.contact": "Контакт",
    "footer.follow": "Следете Не",
    "footer.rights": "Сите права се задржани.",
  },
}

// Language switching functionality
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]")
  const placeholderElements = document.querySelectorAll("[data-translate-placeholder]")

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder")
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key]
    }
  })

  // Update document language
  document.documentElement.lang = lang

  // Update page title
  const titles = {
    sq: "BSA Company - Zgjidhje profesionale për ngrohje, ftohje dhe instalime",
    en: "BSA Company - Professional solutions for heating, cooling and installations",
    mk: "BSA Company - Професионални решенија за греење, ладење и инсталации",
  }
  document.title = titles[lang]
}

// Mobile menu functionality
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  const hamburger = document.querySelector(".hamburger")

  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
}

// Smooth scrolling for navigation links
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        const navMenu = document.querySelector(".nav-menu")
        const hamburger = document.querySelector(".hamburger")
        navMenu.classList.remove("active")
        hamburger.classList.remove("active")
      }
    })
  })
}

// Form submission handler
function handleFormSubmission() {
  const form = document.querySelector(".contact-form form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get current language
    const currentLang = document.getElementById("languageSelect").value

    // Success messages
    const successMessages = {
      sq: "Mesazhi juaj është dërguar me sukses!",
      en: "Your message has been sent successfully!",
      mk: "Вашата порака е успешно испратена!",
    }

    // Show success message
    alert(successMessages[currentLang])

    // Reset form
    form.reset()
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Language selector event listener
  const languageSelect = document.getElementById("languageSelect")
  languageSelect.addEventListener("change", function () {
    switchLanguage(this.value)
  })

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  hamburger.addEventListener("click", toggleMobileMenu)

  // Initialize smooth scrolling
  smoothScroll()

  // Initialize form handling
  handleFormSubmission()

  // Close mobile menu when clicking on nav links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navMenu = document.querySelector(".nav-menu")
      const hamburger = document.querySelector(".hamburger")
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Header background on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })
})
