<template>
  <div :class="`absolute top-[5%] right-[2%] w-[100px] h-[100px]`">
    <ul>
      <RouterLink to="/">
        <li class="hover:font-bold">Home</li>
      </RouterLink>
      <RouterLink to="/people">
        <li class="hover:font-bold">Hunter's</li>
      </RouterLink>
      <RouterLink to="/starship">
        <li class="hover:font-bold">Star Ships</li>
      </RouterLink>
    </ul>
  </div>
</template>
<script setup></script>
