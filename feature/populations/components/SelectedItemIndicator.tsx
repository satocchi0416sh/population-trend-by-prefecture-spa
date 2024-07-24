import { useSelectedItemMetrics } from "..";

interface SelectedItemIndicatorProps {
    selectedItem: HTMLDivElement | null;
}

const SelectedItemIndicator: React.FC<SelectedItemIndicatorProps> = ({ selectedItem }) => {
    const { width, left } = useSelectedItemMetrics(selectedItem);

    return (
        <div
            className="absolute h-full bg-primary transition-all duration-300 bg-accent-01 rounded-full md:hidden"
            style={{ width: `${width}px`, left: `${left}px` }}
        />
    );
};

export default SelectedItemIndicator;