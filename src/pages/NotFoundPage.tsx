import SiteLayout from '../layouts/SiteLayout';

function NotFoundPage() {
  return (
    <SiteLayout
      activePath="/"
      kicker="404"
      title="Страница не найдена"
      subtitle="Запрошенная страница не существует. Проверьте адрес или вернитесь на главную."
    >
      <section className="py-16 sm:py-20">
        <div className="container-shell text-center">
          <p className="font-serifDisplay text-8xl text-pine/20">404</p>
          <p className="mt-6 text-lg leading-8 text-ink/90">
            Возможно, страница была перемещена или удалена.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="/" className="btn-primary">
              На главную
            </a>
            <a href="/kontakty" className="btn-secondary">
              Контакты
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default NotFoundPage;


