<template>
     <ul>
        <li class="flex items-center mb-2">
          <input
            type="checkbox"
            class="mr-2"
          />
          <span :class="{ 'line-through': true}">{{  }}</span>
          <button @click="" class="ml-auto">
            <!-- You can use an icon library here or custom SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.293 4.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 1 1-1.414-1.414l11-11zM4.707 4.293a1 1 0 0 1 1.414-1.414l11 11a1 1 0 1 1-1.414 1.414l-11-11z"
              />
            </svg>
          </button>
        </li>
      </ul>
</template>