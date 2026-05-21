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
import { Sparkles, Smile, Star, Mail, Users, Camera, Heart } from 'lucide-react';

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
      <div id="nav" data-section="nav" className="py-4">
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
            text: "Записаться",            href: "http://wa.me/+79291033003"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="py-8 md:py-16">
        <HeroSplit
          title="Diamond Dent — Стоматология высоких стандартов в Грозном"
          description="Мы превращаем визиты к стоматологу в комфортный опыт, сочетая передовые цифровые технологии, безболезненные методы и эстетическое искусство создания безупречных улыбок."
          tag="Стоматология премиум-класса"
          tagIcon={Sparkles}
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779347445955-xba4vklv.jpg"
          imageAlt="Современная стоматологическая клиника в Грозном"
          buttons={[
            { text: "Наши услуги", href: "#services" },
            { text: "Записаться", href: "http://wa.me/+79291033003" }
          ]}
        />
      </div>

      <div id="services" data-section="services" className="py-12 md:py-20">
        <ProductCardTwo
          title="Наши услуги"
          description="Комплексный подход к здоровью полости рта: от гигиены до сложной имплантации."
          tag="Сервис"
          tagIcon={Smile}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground={true}
          products={[
            { id: "1", brand: "Эстетика", name: "Виниры и реставрация", price: "от 50000₽", rating: 5, reviewCount: "120+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211256412-4g0rt4fu.jpg" },
            { id: "2", brand: "Хирургия", name: "Дентальная имплантация", price: "от 25,000₽", rating: 5, reviewCount: "85+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211477961-7cu7exxo.jpg" },
            { id: "3", brand: "Лечение", name: "Цифровая диагностика", price: "от 3,000₽", rating: 5, reviewCount: "200+", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211535815-19a28603.jpg" }
          ]}
        />
      </div>

      <div id="doctors" data-section="doctors" className="py-12 md:py-20">
        <TeamCardTwo
          title="Наши специалисты"
          description="Команда высококвалифицированных врачей, преданных здоровью вашей улыбки."
          tag="Команда"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          useInvertedBackground={false}
          members={[
            { id: "1", name: "Яндарханов Малик", role: "Стоматолог-терапевт", description: "Специалист с 10-летним стажем", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-aynja8ho.jpg" },
            { id: "2", name: "Хузаева Селима", role: "Стоматолог-ортодонт", description: "Мастер идеальных улыбок", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-n9uorcya.jpg" },
            { id: "3", name: "Межаев Саид-Селим", role: "Врач общей практики", description: "Эксперт в комплексном лечении", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-pn6xqass.jpg" },
            { id: "4", name: "Ибрагимова Луиза", role: "Стоматолог-микроскопист", description: "Лечение под увеличением", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779225402552-9yjvz0nk.jpg" }
          ]}
        />
      </div>

      <div id="cases" data-section="cases" className="py-12 md:py-20">
        <FeatureCardOne 
          title="Наши работы"
          description="Результаты, которыми мы гордимся. До и после профессионального лечения."
          tag="Кейсы"
          tagIcon={Heart}
          animationType="slide-up"
          gridVariant="two-items-per-row"
          features={[{ title: "Реставрация", description: "Безупречный результат", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779211256412-4g0rt4fu.jpg" }]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="interior" data-section="interior" className="py-12 md:py-20">
        <FeatureCardOne 
          title="Наша клиника"
          description="Создали пространство, где комфорт сочетается с передовым оборудованием."
          tag="Интерьер"
          tagIcon={Camera}
          animationType="slide-up"
          gridVariant="two-items-per-row"
          features={[{ title: "Зона ожидания", description: "Комфорт с первых минут", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dw84RnSEOsmbFdYVY2F51sVH09/uploaded-1779314918699-ps9z9ani.jpg" }]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about" className="py-12 md:py-20">
        <InlineImageSplitTextAbout
          heading={[{ type: "text", content: "Diamond Dent: Совершенство в каждом движении врача" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="py-12 md:py-20">
        <TestimonialCardSix
          title="Отзывы наших пациентов"
          description="Почему нас выбирают снова и рекомендуют близким."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            { id: "1", name: "Амина И.", handle: "Пациент", testimonial: "Лучшая клиника в Грозном, очень внимательные доктора!" },
            { id: "2", name: "Магомед А.", handle: "Пациент", testimonial: "Имплантация прошла идеально, цены прозрачные." },
            { id: "3", name: "Седа М.", handle: "Пациент", testimonial: "Детский стоматолог — просто чудо, дети не боятся." }
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="py-12 md:py-20">
        <ContactSplit
          tag="Запись на прием"
          title="Станьте обладателем безупречной улыбки"
          description="Оставьте данные для связи с нашим администратором."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[{ text: "Записаться", onClick: () => { window.location.href = 'http://wa.me/+79291033003'; } }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Diamond Dent"
          columns={[
            { title: "Услуги", items: [{ label: "Реставрация", href: "#services" }, { label: "Имплантация", href: "#services" }] },
            { title: "Навигация", items: [{ label: "Врачи", href: "#doctors" }, { label: "Отзывы", href: "#testimonials" }] },
            { title: "Контакты", items: [{ label: "WhatsApp", href: "http://wa.me/+79291033003" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}