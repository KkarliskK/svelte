import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BirthdayForm from './BirthdayForm.svelte';

describe("BirthdayForm", () => {
    it("has a form element", () => {
        render(BirthdayForm);
        expect(screen.queryByRole("form")).toBeVisible();
    });
});