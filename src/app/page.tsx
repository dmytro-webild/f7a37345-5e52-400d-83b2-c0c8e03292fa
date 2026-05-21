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
import { Sparkles, Smile, Camera, Users, LayoutGrid, Stethoscope, Mail } from 'lucide-react';

export default function DiamondDentPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLargeSizeMediumTitles"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
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
          button={{ text: "Записаться", href: "http://wa.me/+79291033003" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Стоматология высоких стандартов"
          description="Искусство создания идеальных улыбок с помощью передовых технологий и индивидуального подхода в центре Грозного."
          tag="Стоматология премиум-класса"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779347445955-xba4vklv.jpg"
          buttons={[
            { text: "Наши услуги", href: "#services" },
            { text: "Записаться", href: "http://wa.me/+79291033003" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardTwo
          title="Наши услуги"
          description="Широкий спектр профессиональной стоматологической помощи."
          tag="Сервис"
          tagIcon={Smile}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            { id: "1", brand: "Эстетика", name: "Виниры и реставрация", price: "от 50000₽", rating: 5, reviewCount: "120+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211256412-4g0rt4fu.jpg" },
            { id: "2", brand: "Хирургия", name: "Дентальная имплантация", price: "от 25000₽", rating: 5, reviewCount: "85+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211477961-7cu7exxo.jpg" },
            { id: "3", brand: "Лечение", name: "Цифровая диагностика", price: "от 3000₽", rating: 5, reviewCount: "200+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211535815-19a28603.jpg" }
          ]}
        />
      </div>

      <div id="cases" data-section="cases">
        <FeatureCardOne
          title="До / После"
          description="Результаты, которыми мы гордимся."
          tag="Кейсы"
          tagIcon={Camera}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[]}
        />
      </div>

      <div id="doctors" data-section="doctors">
        <TeamCardTwo
          title="Наши специалисты"
          description="Команда профессионалов, преданных вашему здоровью."
          tag="Команда"
          tagIcon={Users}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          useInvertedBackground={false}
          members={[
            { id: "1", name: "Яндарханов Малик", role: "Стоматолог-терапевт", description: "Специалист по художественной реставрации", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-aynja8ho.jpg" },
            { id: "2", name: "Хузаева Селима", role: "Стоматолог-ортодонт", description: "Эксперт в выравнивании зубного ряда", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-n9uorcya.jpg" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[{ type: "text", content: "Совершенство в каждом движении" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="interior" data-section="interior">
        <FeatureCardOne
          title="Наша клиника"
          description="Комфортное пространство для вашего спокойствия."
          tag="Интерьер"
          tagIcon={LayoutGrid}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[]}
        />
      </div>

      <div id="equipment" data-section="equipment">
        <FeatureCardOne
          title="Технологическое оснащение"
          description="Современное оборудование для точной диагностики и лечения."
          tag="Оборудование"
          tagIcon={Stethoscope}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Отзывы пациентов"
          description="Мнение наших пациентов — лучшее доказательство качества."
          tag="Доверие"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            { id: "1", name: "Амина И.", handle: "Пациент", testimonial: "Очень внимательные доктора, безболезненно установили виниры." }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Контакты"
          tagIcon={Mail}
          title="Запишитесь на прием"
          description="Оставьте данные и мы свяжемся с вами в ближайшее время."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Diamond Dent"
          columns={[
            { title: "Услуги", items: [{ label: "Все услуги", href: "#services" }] },
            { title: "Компания", items: [{ label: "Контакты", href: "#contact" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}