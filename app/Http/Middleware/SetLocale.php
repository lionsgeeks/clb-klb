<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    private const SUPPORTED = ['fr', 'ar', 'nl'];
    private const DEFAULT = 'fr';

    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->session()->get('locale')
            ?? $request->cookie('locale')
            ?? self::DEFAULT;

        if (in_array($locale, self::SUPPORTED, true)) {
            app()->setLocale($locale);
        } else {
            app()->setLocale(self::DEFAULT);
        }

        return $next($request);
    }
}
