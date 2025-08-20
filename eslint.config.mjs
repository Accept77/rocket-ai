import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
        ],
    },
    {
        rules: {
            // React 관련 규칙
            "react/jsx-no-duplicate-props": "error",
            "react/jsx-no-undef": "error",
            "react/no-danger-with-children": "error",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "error",
            "react/require-render-return": "error",

            // 일반적인 코딩 표준
            "no-unused-vars": "warn",
            "no-console": "warn",
            "prefer-const": "error",
            "no-var": "error",

            // TypeScript 관련
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",

            // Next.js 관련
            "@next/next/no-img-element": "error",
            "@next/next/no-html-link-for-pages": "error",
        },
    },
];

export default eslintConfig;
