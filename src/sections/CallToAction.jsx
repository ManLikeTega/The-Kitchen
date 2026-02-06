function CallToAction() {
  return (
    <>
      <section className="section bg-linear-to-tr from-(--color-three) from-0% via-(--color-seven) via-50% to-(--color-six) to-100%">
        <div className="text-center">
          <p className="text-white">ARE YOU READY!</p>

          <h2 className="text-2xl md:text-4xl font-bold text-white max-w-lg mx-auto my-6">
            Start your creative journey today
          </h2>

          <button className="btn bg-black capitalize">
            <a href="#">Enroll now</a>
          </button>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
