<?php

class header_divar_mobile
{
    public function __construct($parent)
    {
        $header_divar_mobile = '
            <div id="header_divar_mobile">
                111111111111
                979849649lgklhkjfvj
            </div>
        ';
        $header_divar_mobile_css = '<style>';
        $header_divar_mobile_css .= '<style>';
        $header_divar_mobile_css .= '<style>';
        $header_divar_mobile_css .= '<style>';
        $header_divar_mobile_js = '<script> 
            window.addEventListener("DOMContentLoaded",()=>{
                
            });
        ';

        $parent->add_js_text($header_divar_mobile_js);
        $parent->add_css_text($header_divar_mobile_css);
        $parent->add_center($header_divar_mobile);
    }
}