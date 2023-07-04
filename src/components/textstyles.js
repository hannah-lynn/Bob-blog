<div class="flex flex-col flex-wrap flex-grow">
  <h1 class="text-center bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-5xl mb-[0.7em]">
    Solo Adventurer,<br />
    <span class="block text-2xl">The World Is Waiting For You</span>
  </h1>
  
  <style>
    h2 {
      position: relative;
      color: rgba(0, 0, 0, .3);
      font-size: 5em;
    }
    h2:before {
      content: attr(data-text);
      position: absolute;
      overflow: hidden;
      max-width: 7em;
      white-space: nowrap;
      color: #fff;
      animation: loading 8s linear;
    }
    @keyframes loading {
      0% {
        max-width: 0;
      }
    }
  </style>
  
    <h2 data-text="It's loading…">It's loading…</h2>
</div>
</section>