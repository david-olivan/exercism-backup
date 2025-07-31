package LanguageList;

use v5.38;

our @Languages;

sub add_language ($language) {
    push(@Languages, $language)
}

sub remove_language () {
    pop(@Languages)
}

sub first_language () {
    return $Languages[0]
}

sub last_language () {
    return $Languages[-1]
}

sub get_languages (@elements) {
    my @new_list;
    for my $elem (@elements) {
        push(@new_list, $Languages[$elem - 1])
    }
    return @new_list
}

sub has_language ($language) {
    for my $lang (@Languages) {
        if ($lang eq $language) {
            return 1
        }
    }
    return 0
}
