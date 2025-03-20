import { ComponentProps } from 'react';
import Button from '@clayui/button';
import ClayEmptyState from '@clayui/empty-state';

type NoSettingsEmptyStateProps = {
    buttonProps?: ComponentProps<typeof Button>;
    emptyStateProps?: ComponentProps<typeof ClayEmptyState>;
};

export default function NoSettingsEmptyState({
    buttonProps,
    emptyStateProps,
}: NoSettingsEmptyStateProps) {
    return (
        <ClayEmptyState
            description="Oops... looks like is your first time here, click in the button below to start the configuration"
            imgSrc={new URL(import.meta.url).origin + '/wizard.svg'}
            title="No Settings Yet."
            {...emptyStateProps}
        >
            <Button displayType="primary" {...buttonProps}>
                Setup
            </Button>
        </ClayEmptyState>
    );
}
