"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Smile, Star, Mail } from 'lucide-react';

export default function DiamondDentPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Diamond Dent Грозный"
          navItems={[
            { name: "Главная", id: "hero" },
            { name: "Услуги", id: "services" },
            { name: "О нас", id: "about" },
            { name: "Контакты", id: "contact" }
          ]}
          button={{
            text: "Записаться на прием",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Diamond Dent — Стоматология высоких стандартов в Грозном"
          description="Мы превращаем визиты к стоматологу в комфортный опыт, сочетая передовые цифровые технологии, безболезненные методы и эстетическое искусство создания безупречных улыбок."
          tag="Стоматология премиум-класса"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=aj2gaz"
          imageAlt="Современная стоматологическая клиника в Грозном"
          imagePosition="right"
          kpis={[
            { value: "10+ лет", label: "Успешной работы" },
            { value: "15,000+", label: "Счастливых улыбок" },
            { value: "100%", label: "Комфортное лечение" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "Наши услуги", href: "#services" },
            { text: "Записаться", href: "#contact" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Наши услуги"
          description="Комплексный подход к здоровью полости рта: от гигиены и лечения до сложной имплантации и художественной реставрации зубов."
          tag="Сервис"
          tagIcon={Smile}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={true}
          products={[
            {
              id: "1",              brand: "Эстетика",              name: "Виниры и реставрация",              price: "от 15,000₽",              rating: 5,
              reviewCount: "120+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n5frh0",              imageAlt: "Художественная реставрация зубов"
            },
            {
              id: "2",              brand: "Хирургия",              name: "Дентальная имплантация",              price: "от 25,000₽",              rating: 5,
              reviewCount: "85+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ied1qp",              imageAlt: "Имплантация под ключ"
            },
            {
              id: "3",              brand: "Лечение",              name: "Цифровая диагностика",              price: "от 3,000₽",              rating: 5,
              reviewCount: "200+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=njfrlp",              imageAlt: "Цифровой рентген и диагностика"
            }
          ]}
          buttons={[
            { text: "Записаться на консультацию", href: "#contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Diamond Dent: Совершенство в каждом движении врача" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Наши специалисты", href: "#testimonials" },
            { text: "Связаться с нами", href: "#contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Почему выбирают Diamond Dent"
          description="Мы используем только сертифицированные материалы и передовое оборудование, гарантируя долговечный результат и абсолютный комфорт."
          tag="Наши преимущества"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={true}
          features={[
            {
              title: "Цифровое планирование",              description: "Моделирование вашей будущей улыбки до начала лечения с помощью компьютерных технологий.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pf7sgb"},
            {
              title: "Команда экспертов",              description: "Ведущие стоматологи города, регулярно повышающие квалификацию в лучших академиях страны.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pbserj"}
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Отзывы наших пациентов"
          description="Узнайте, почему пациенты доверяют нам самое ценное — свою улыбку."
          tag="Доверие"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Амина И.",              handle: "Пациент",              testimonial: "Лучшая клиника в Грозном. Очень внимательные доктора, безболезненно установили виниры. Теперь улыбаюсь постоянно!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bqmhs0"
            },
            {
              id: "2",              name: "Магомед А.",              handle: "Пациент",              testimonial: "Проходил имплантацию, всё прошло идеально. Весь процесс разъяснили, цены прозрачные, сервис на уровне московских клиник.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h1y3jb"
            },
            {
              id: "3",              name: "Седа М.",              handle: "Пациент",              testimonial: "Лечила зубы детям. Врач нашел подход, дети даже не испугались. Рекомендую Diamond Dent всей семьей.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wkqmwe"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Запись на прием"
          tagIcon={Mail}
          title="Станьте обладателем безупречной улыбки"
          description="Оставьте ваши данные, и наш администратор свяжется с вами для выбора удобного времени визита в Diamond Dent."
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9oxweb"
          imageAlt="Приемная Diamond Dent"
          mediaPosition="right"
          mediaAnimation="slide-up"
          inputPlaceholder="Ваш номер телефона"
          buttonText="Записаться"
          termsText="Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Diamond Dent"
          copyrightText="© 2025 Diamond Dent Грозный. Все права защищены."
          columns={[
            {
              title: "Услуги",              items: [
                { label: "Реставрация", href: "#services" },
                { label: "Имплантация", href: "#services" },
                { label: "Гигиена", href: "#services" },
                { label: "Лечение", href: "#services" }
              ]
            },
            {
              title: "О клинике",              items: [
                { label: "О нас", href: "#about" },
                { label: "Отзывы", href: "#testimonials" },
                { label: "Наши доктора", href: "#testimonials" },
                { label: "Контакты", href: "#contact" }
              ]
            },
            {
              title: "Соцсети",              items: [
                { label: "Instagram", href: "#" },
                { label: "Telegram", href: "#" },
                { label: "WhatsApp", href: "#" },
                { label: "VK", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
