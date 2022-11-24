<script>
  function toggleNavbar() {
    const element = document.querySelector("#collapse");
    console.log(element.classList.contains("hidden"));
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
</script>

<!-- component -->
<link
  rel="stylesheet"
  href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
/>
<link
  rel="stylesheet"
  href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
/>

<nav
  class="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white border-b border-gray-200"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start "
    >
      <a
        class="text-lg font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800"
        href="/">IS</a
      >
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={toggleNavbar}
      >
        <i class="text-gray-800 fas fa-bars" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden transition-all"
      id="collapse"
    >
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center justify-center">
          <a
            class=" text-gray-800 hover:text-blue-700 px-3 py-4 lg:py-2 flex items-center text-md font-semibold"
            href="/"
          >
            Información</a
          >
        </li>
        <li class="flex justify-center items-center">
          <a
            class="text-gray-800 hover:text-blue-700 px-3 py-4 lg:py-2 flex items-center text-md font-semibold"
            href="/actividades"
          >
            Actividades</a
          >
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        <li class="inline-block relative">
          <a
            class=" text-gray-800 hover:text-blue-700 px-3 py-4 lg:py-2 flex items-center text-md font-semibold"
            href="/plan-estudios"
          >
            Plan de Estudios
          </a>
        </li>
        <li class="flex items-center">
          <a
            href="https://www.facebook.com/IngenieriaEnSistemasVS"
            class="lg:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
            ><i
              class="lg:text-gray-800 text-gray-800 fab fa-facebook text-xl leading-lg"
            /><span class="lg:hidden inline-block ml-2">Facebook</span></a
          >
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
            href="https://t.me/+USa9Zlwai-RGxj_A"
            ><i
              class="lg:text-gray-800 text-gray-800 fab fa-telegram text-xl leading-lg"
            /><span class="lg:hidden inline-block ml-2">telegram</span></a
          >
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-gray-800 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-semibold"
            href="https://instagram.com/aeis_vs?igshid=YmMyMTA2M2Y="
          >
            <span
              class="bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center"
            >
              <i
                class="lg:text-white text-white fab fa-instagram text-md leading-lg"
              />
            </span>
            <span class="lg:hidden inline-block ml-2">Instagram</span>

          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
