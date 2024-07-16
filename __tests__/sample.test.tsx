import React from 'react';
import { render } from "@testing-library/react";

describe("Sample", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
        render(<Sample />);
    });
});

const Sample = () => {
    return (
        <div>
            Enter
        </div>
    );
}