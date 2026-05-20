"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Smile, Star, Mail, Users } from 'lucide-react';

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
            { name: "Врачи", id: "doctors" },
            { name: "О нас", id: "about" },
            { name: "Контакты", id: "contact" }
          ]}
          button={{
            text: "Записаться на прием",            href: "http://wa.me/+79291033003"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Diamond Dent — Стоматология высоких стандартов в Грозном"
          description="Мы превращаем визиты к стоматологу в комфортный опыт, сочетая передовые цифровые технологии, безболезненные методы и эстетическое искусство создания безупречных улыбок. Адрес: Ул. Шейха Али Митева, 59."
          tag="Стоматология премиум-класса"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779208184969-49n41xud.jpg"
          imageAlt="Современная стоматологическая клиника в Грозном"
          imagePosition="right"
          buttons={[
            { text: "Наши услуги", href: "#services" },
            { text: "Записаться", href: "http://wa.me/+79291033003" }
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
              id: "1",              brand: "Эстетика",              name: "Виниры и реставрация",              price: "от 50000₽",              rating: 5,
              reviewCount: "120+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211256412-4g0rt4fu.jpg",              imageAlt: "Художественная реставрация зубов"
            },
            {
              id: "2",              brand: "Хирургия",              name: "Дентальная имплантация",              price: "от 25,000₽",              rating: 5,
              reviewCount: "85+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211477961-7cu7exxo.jpg",              imageAlt: "Имплантация под ключ"
            },
            {
              id: "3",              brand: "Лечение",              name: "Цифровая диагностика",              price: "от 3,000₽",              rating: 5,
              reviewCount: "200+",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211535815-19a28603.jpg",              imageAlt: "Цифровой рентген и диагностика"
            }
          ]}
          buttons={[
            { text: "Записаться на консультацию", href: "http://wa.me/+79291033003" }
          ]}
        />
      </div>

      <div id="doctors" data-section="doctors">
        <TeamCardTwo
          title="Наши специалисты"
          description="Команда высококвалифицированных врачей, преданных здоровью и красоте вашей улыбки."
          tag="Команда"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          useInvertedBackground={false}
          members={[
            { id: "1", name: "Яндарханов", role: "Главный врач", description: "Специалист по эстетической стоматологии и имплантации с опытом более 10 лет.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-aynja8ho.jpg" },
            { id: "2", name: "Д-р Фатима", role: "Терапевт", description: "Профессионал в области безболезненного лечения зубов и эндодонтии.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-n9uorcya.jpg" },
            { id: "3", name: "Межаев  Саид-Селим", role: "", description: "Врач-стоматолог общей практики ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-pn6xqass.jpg" },
            { id: "4", name: "Ибрагимова Луиза ", role: "", description: "Стоматолог - микроскопист ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-9yjvz0nk.jpg" },
            { id: "5", name: "Гайлаев Сулейман  ", role: "", description: "Врач стоматолог - детский ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779308675600-zlsd3f6d.jpg" },
            { id: "6", name: "Ибиев Хасан ", role: "", description: "Стоматолог - терапевт/эндодонтист ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779308675600-85eg6mq1.jpg" },
            { id: "7", name: "Ибрагимова Марет ", role: "", description: "Врач-стоматолог", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779308675600-46soe5n4.jpg" }
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
            { text: "Связаться с нами", href: "http://wa.me/+79291033003" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Почему выбирают Diamond Dent"
          description="Мы используем только сертифицированные материалы и передовое оборудование, гарантируя долговечный результат и абсолютный комфорт"
          tag="Наши преимущества"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={true}
          features={[
            {
              title: "Цифровое планирование",              description: "Моделирование вашей будущей улыбки до начала лечения с помощью компьютерных технологий.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779214792802-z6xibcad.jpg"}
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
          onSubmit={(email) => { window.location.href = 'http://wa.me/+79291033003'; }}
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
                { label: "Врачи", href: "#doctors" },
                { label: "Отзывы", href: "#testimonials" },
                { label: "Контакты", href: "#contact" }
              ]
            },
            {
              title: "Соцсети",              items: [
                { label: "WhatsApp", href: "http://wa.me/+79291033003" },
                { label: "Instagram", href: "https://www.instagram.com/diamond_dent_grozny?igsh=MW9scTNkcndjMnR6" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}