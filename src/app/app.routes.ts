import { Routes } from '@angular/router';
import { AriaValidAttrValueComponent } from './pages/aria-valid-attr-value/aria-valid-attr-value.component';
import { AriaCommandNameComponent } from './pages/aria-command-name/aria-command-name.component';
import { AriaLabelledbyCasesComponent } from './pages/aria-command-name/aria-labelledby-cases/aria-labelledby-cases.component';
import { AriaDeprecatedRoleComponent } from './pages/aria-deprecated-role/aria-deprecated-role.component';
import { AriaMeterNameComponent } from './pages/aria-meter-name/aria-meter-name.component';
import { AriaInvalidAttributeComponent } from './pages/aria-invalid-attribute/aria-invalid-attribute.component';
import { AriaProhibitedAttributeComponent } from './pages/aria-prohibited-attribute/aria-prohibited-attribute.component';
import { AriaRequiredAttrComponent } from './pages/aria-required-attr/aria-required-attr.component';
import { AriaRequiredChildrenComponent } from './pages/aria-required-children/aria-required-children.component';

export const routes: Routes = [
    { path: 'aria-valid-attr-value', component: AriaValidAttrValueComponent },
    { path: 'aria-command-name', component: AriaCommandNameComponent },
    { path: 'aria-command-name/aria-labelledby-cases', component: AriaLabelledbyCasesComponent },
    { path: 'aria-deprecated-role', component: AriaDeprecatedRoleComponent },
    { path: 'aria-meter-name', component: AriaMeterNameComponent },
    { path: 'aria-invalid-attribute', component: AriaInvalidAttributeComponent },
    { path: 'aria-prohibited-attribute', component: AriaProhibitedAttributeComponent },
    { path: 'aria-required-attribute', component: AriaRequiredAttrComponent },
    { path: 'aria-required-children', component: AriaRequiredChildrenComponent },
];
